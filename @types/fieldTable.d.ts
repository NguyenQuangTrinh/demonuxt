declare global {
    interface FieldTable {
        type?: string,
        index?: number
        label?: string
        columnKey?: string,
        prop?: string,
        width?: string,
        minWidth?: string,
        fixed?: string | boolean,
        renderHeader?: any
        sortable?: boolean | string,
        sortMethod?: (a: any, b: any) => void,
        sortBy?: any,
        sortOrders?: any,
        resizable?: boolean
        formatter?: (row: number, column: number, cellValue: any, index: number) => void
        showOverflowTooltip?: boolean,
        align?: string,
        headerAlign?: string,
        labelClassName?: string,
        selectable?: (row: number, index: number) => void
        reserveSelection?: boolean,
        filters?: any
        filterPlacement?: string,
        filterMultiple?: boolean,
        filterMethod?: (value: any, row: number, column: number) => void
        filteredValue?: any[],
    }
}

export {}