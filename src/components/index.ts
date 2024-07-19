import { twMerge } from "tailwind-merge";

export type SubMenuDetailType = 'Link' | 'Router' | 'Button';

export interface SubMenuDetail {
    link: string;
    title: string;
    routeName: string | undefined;
    param?: any;
    disabled?: boolean;
    typeMenu: SubMenuDetailType;
    onClick?: any;
}

export interface SelectOption {
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



export interface ResponseRequest {
    status: any,
    message: string | undefined,
    messages: any,
    error: number | undefined,
    data: any,
}

export interface PaginateResponse extends ResponseRequest {
    data: any,
    pager: Pager
}

export interface Pager {
    currentUri: any
    uri: any
    hasMore: boolean
    total: number
    perPage: number
    pageCount: number
    pageSelector: string
    currentPage: number
    next: string
    previous: any
    segment: number
}

export const useMergeClasses = (componentClasses: string | string[]): string => twMerge(componentClasses)
