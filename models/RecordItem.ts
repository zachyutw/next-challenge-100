export interface RecordItemHandlerProps<T = any> {
    record?: T;
    index?: number;
    onClick?: (data?: T, index?: number) => void;
}
