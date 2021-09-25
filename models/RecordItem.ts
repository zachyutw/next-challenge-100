export interface RecordItemHandlerProps<T = any> {
    record?: T;
    index?: number;
    onClick?: (data?: T, index?: number) => void;
}

export interface FeatureItem {
    name: string;
    description: string;
    linkProp: { href: string; text: string };
}
