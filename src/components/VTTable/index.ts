
export interface VTTableColumn {
    propName?: string | null;
    title: string,
    type?: ColumnType,
    name?: string,
    headerClass?: string,
    headerPosition?: 'left' | 'center' | 'right' | 'between',
    rowClass?: string,
    hiddenColumn?: Boolean,
    checked?: Boolean,
    isMobileHeader?: Boolean
}

export type ColumnType = "Text" | "Number" | "Boolean" | "Tanggal" | "Custome";

export type MethodType = "Post" | "Get" | "Delete" | "Put" | "Default";