import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutAffiliateInput } from './order-create-without-affiliate.input';

@InputType()
export class OrderCreateOrConnectWithoutAffiliateInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutAffiliateInput, {nullable:false})
    create!: OrderCreateWithoutAffiliateInput;
}
