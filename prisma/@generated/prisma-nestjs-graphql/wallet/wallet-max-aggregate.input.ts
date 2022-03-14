import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WalletMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    category?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    balance?: true;

    @Field(() => Boolean, {nullable:true})
    account?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    settlementAutomatic?: true;

    @Field(() => Boolean, {nullable:true})
    settlementDefaultId?: true;

    @Field(() => Boolean, {nullable:true})
    verificationStartedAt?: true;

    @Field(() => Boolean, {nullable:true})
    shippingId?: true;

    @Field(() => Boolean, {nullable:true})
    picture?: true;
}
