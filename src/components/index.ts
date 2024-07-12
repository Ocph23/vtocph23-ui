export default interface SelectOption {
    value: any,
    name: string,
}

export interface Tanggal {
    date: string;
    timezone_type: number;
    timezone: string;
    getTanggal: Function

}

function getDateDMY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}


function getDateYMD(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

export const VTHelper = {
    populateModelFromSource: <T extends Object>(target: T, source: T) => {
        (Object.keys(source) as Array<keyof T>).forEach(key => {
            target[key] = source[key];
        });
    },

    GetRequestModel: <T extends Object>(source: T) => {
        const target = {} as any;
        (Object.keys(source) as Array<keyof T>).forEach(key => {
            const tanggal: Tanggal = source[key] as Tanggal;
            if (tanggal && tanggal.date && tanggal.timezone) {
                target[key] = tanggal.date;
            } else {
                target[key] = source[key];
            }
        });
        return target;
    },

    TanggalToDate(data: Tanggal, format: TanggalFormat) {
        const tanggal = data as Object as Tanggal;
        if (tanggal && tanggal.date) {
            if (format == 'Ymd')
                return DateWithFormat.DateYMD(new Date(tanggal.date))
            return DateWithFormat.DateDMY(new Date(tanggal.date));
        }
        return data;
    },
    ConvertGender(data: string) {
        return data ? data.toLowerCase() === "p" ? 'Perempuan' : 'Laki-Laki' : '';
    }
}
export type TanggalFormat = 'Ymd' | 'dmY';

export const DateWithFormat = { DateDMY: getDateDMY, DateYMD: getDateYMD };


