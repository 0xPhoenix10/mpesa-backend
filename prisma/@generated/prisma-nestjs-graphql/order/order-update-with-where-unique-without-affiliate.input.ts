import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutAffiliateInput } from './order-update-without-affiliate.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutAffiliateInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutAffiliateInput, {nullable:false})
    data!: OrderUpdateWithoutAffiliateInput;
}
