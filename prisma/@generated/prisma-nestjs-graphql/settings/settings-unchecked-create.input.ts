import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SettingsUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    woocommerceUrl?: string;

    @Field(() => String, {nullable:true})
    woocommerceConsumerKey?: string;

    @Field(() => Boolean, {nullable:true})
    woocommerceActive?: boolean;

    @Field(() => String, {nullable:true})
    woocommerceConsumerSecret?: string;

    @Field(() => String, {nullable:false})
    walletAccount!: string;
}
