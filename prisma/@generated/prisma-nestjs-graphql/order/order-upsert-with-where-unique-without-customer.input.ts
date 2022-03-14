import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutCustomerInput } from './order-update-without-customer.input';
import { OrderCreateWithoutCustomerInput } from './order-create-without-customer.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutCustomerInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutCustomerInput, {nullable:false})
    update!: OrderUpdateWithoutCustomerInput;

    @Field(() => OrderCreateWithoutCustomerInput, {nullable:false})
    create!: OrderCreateWithoutCustomerInput;
}
