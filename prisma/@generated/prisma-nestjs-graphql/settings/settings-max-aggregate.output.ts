import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SettingsMaxAggregate {

    @Field(() => String, {nullable:true})
    woocommerceUrl?: string;

    @Field(() => String, {nullable:true})
    woocommerceConsumerKey?: string;

    @Field(() => Boolean, {nullable:true})
    woocommerceActive?: boolean;

    @Field(() => String, {nullable:true})
    woocommerceConsumerSecret?: string;

    @Field(() => String, {nullable:true})
    walletAccount?: string;
}
