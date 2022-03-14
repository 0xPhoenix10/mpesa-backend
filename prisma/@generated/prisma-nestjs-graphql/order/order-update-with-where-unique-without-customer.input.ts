import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutCustomerInput } from './order-update-without-customer.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutCustomerInput, {nullable:false})
    data!: OrderUpdateWithoutCustomerInput;
}
