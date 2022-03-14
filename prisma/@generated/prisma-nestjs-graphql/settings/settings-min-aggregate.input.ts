import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SettingsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    woocommerceUrl?: true;

    @Field(() => Boolean, {nullable:true})
    woocommerceConsumerKey?: true;

    @Field(() => Boolean, {nullable:true})
    woocommerceActive?: true;

    @Field(() => Boolean, {nullable:true})
    woocommerceConsumerSecret?: true;

    @Field(() => Boolean, {nullable:true})
    walletAccount?: true;
}
