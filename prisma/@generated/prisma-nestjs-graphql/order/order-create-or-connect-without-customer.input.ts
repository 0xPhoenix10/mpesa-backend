import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutCustomerInput } from './order-create-without-customer.input';

@InputType()
export class OrderCreateOrConnectWithoutCustomerInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutCustomerInput, {nullable:false})
    create!: OrderCreateWithoutCustomerInput;
}
