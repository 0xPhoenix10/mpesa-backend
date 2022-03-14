import { registerEnumType } from '@nestjs/graphql';

export enum EcommercePlatformEnum {
    SEVI = "SEVI",
    WOOCOMMERCE = "WOOCOMMERCE",
    CUSTOM = "CUSTOM"
}


registerEnumType(EcommercePlatformEnum, { name: 'EcommercePlatformEnum', description: undefined })
