import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutBillingInput } from './order-update-without-billing.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutBillingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutBillingInput, {nullable:false})
    data!: OrderUpdateWithoutBillingInput;
}
