import { registerEnumType } from '@nestjs/graphql';

export enum SettingsScalarFieldEnum {
    woocommerceUrl = "woocommerceUrl",
    woocommerceConsumerKey = "woocommerceConsumerKey",
    woocommerceActive = "woocommerceActive",
    woocommerceConsumerSecret = "woocommerceConsumerSecret",
    walletAccount = "walletAccount"
}


registerEnumType(SettingsScalarFieldEnum, { name: 'SettingsScalarFieldEnum', description: undefined })
