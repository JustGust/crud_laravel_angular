export interface Bill {
    id: number;
    seller_name: string;
    seller_nit: number;
    buyer_name: string;
    buyer_nit: number;
    value_before_iva:number;
    iva:number;
    total_pay:number;
    created_at: string;

}
