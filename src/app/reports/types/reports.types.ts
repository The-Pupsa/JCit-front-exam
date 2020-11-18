export type ReportOptions = {
    id: string;
};

export type Column = {
    key: string;
    primary: boolean;
    title: string;
    type: ColumnType;
    metricType?: MetricType;
    currency?: string;
};

export enum ColumnType {
    entity = 'entity',
    metric = 'metric',
}
export enum MetricType {
    money = 'money',
    absolute = 'absolute',
    relative = 'relative',
}

export interface IIndexing<T> {
    [key: string]: T;
}