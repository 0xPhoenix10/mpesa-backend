import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutShippingInput } from './order-update-without-shipping.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutShippingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutShippingInput, {nullable:false})
    data!: OrderUpdateWithoutShippingInput;
}
