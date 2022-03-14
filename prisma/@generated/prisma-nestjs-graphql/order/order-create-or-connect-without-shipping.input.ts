import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutShippingInput } from './order-create-without-shipping.input';

@InputType()
export class OrderCreateOrConnectWithoutShippingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutShippingInput, {nullable:false})
    create!: OrderCreateWithoutShippingInput;
}
