declare global {
    export interface BaseResponse {
        message: string;
        status: boolean;
    }

    interface BaseDataResponse {
        createdAt: string,
        updatedAt: string,
    } 
    interface ManyDataResponse<T> extends BaseResponse {
        data: {
            limit: number;
            offset: number;
            total: number;
            items: T[];
        };
    }
    interface OneDataResponse<T> extends BaseResponse {
        data: T;
    }
}

export {}  