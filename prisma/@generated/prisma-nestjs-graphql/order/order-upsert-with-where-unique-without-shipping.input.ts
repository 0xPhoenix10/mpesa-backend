import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutShippingInput } from './order-update-without-shipping.input';
import { OrderCreateWithoutShippingInput } from './order-create-without-shipping.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutShippingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutShippingInput, {nullable:false})
    update!: OrderUpdateWithoutShippingInput;

    @Field(() => OrderCreateWithoutShippingInput, {nullable:false})
    create!: OrderCreateWithoutShippingInput;
}
