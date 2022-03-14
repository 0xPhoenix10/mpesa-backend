import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutSettingsInput } from '../wallet/wallet-create-nested-one-without-settings.input';

@InputType()
export class SettingsCreateInput {

    @Field(() => String, {nullable:true})
    woocommerceUrl?: string;

    @Field(() => String, {nullable:true})
    woocommerceConsumerKey?: string;

    @Field(() => Boolean, {nullable:true})
    woocommerceActive?: boolean;

    @Field(() => String, {nullable:true})
    woocommerceConsumerSecret?: string;

    @Field(() => WalletCreateNestedOneWithoutSettingsInput, {nullable:false})
    wallet!: WalletCreateNestedOneWithoutSettingsInput;
}
