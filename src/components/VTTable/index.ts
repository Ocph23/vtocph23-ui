
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



export interface VTTableSource {
    data: any[],
    paginate?: VTTablePagination
    totalRecords: number
}



export interface VTTablePagination {
    currentPage: number
    pageSize: number
    searchTerm?: string
    sortOrder: 'asc' | 'desc' | null
    columnOrder?: string
}

export type ColumnType = "Text" | "Number" | "Boolean" | "Tanggal" | "Custome";

export type MethodType = "Post" | "Get" | "Delete" | "Put" | "Default";
export type MethodXType = "All" | "Paginate";