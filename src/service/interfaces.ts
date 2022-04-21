export interface tradePairRequest extends tradePair {
    priceStart: number;
    priceEnd: number;
}

export interface tradePairResponse extends tradePair {
    price: number;
}

interface tradePair {
    base: string;
    target: string;
    baseDecimalPlaces: number;
    targetDecimalPlaces: number;
    baseUrl: string;
    targetUrl: string;
    name: string;
    transactionDate?: Date;
    conversionType?: string
}
