import { registerEnumType } from '@nestjs/graphql';

export enum creditRefType {
    IOU1 = "IOU1",
    SHOP_ORDER = "SHOP_ORDER",
    P2P_LOAN1 = "P2P_LOAN1"
}


registerEnumType(creditRefType, { name: 'creditRefType', description: undefined })
