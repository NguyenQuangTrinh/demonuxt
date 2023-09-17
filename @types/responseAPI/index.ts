export interface BaseResponse {
    message: string;
    status: boolean;
}

export interface OneDataResponse<T> extends BaseResponse {
    data: T;
}

export interface ManyDataResponse<T> extends BaseResponse {
    data: {
        limit: number;
        offset: number;
        total: number;
        items: T[];
    };
}

export interface BaseDataResponse {
    createdAt: string,
    updatedAt: string,
}