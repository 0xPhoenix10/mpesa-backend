import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { ShippingCreateWithoutOrderInput } from './shipping-create-without-order.input';

@InputType()
export class ShippingCreateOrConnectWithoutOrderInput {

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    where!: ShippingWhereUniqueInput;

    @Field(() => ShippingCreateWithoutOrderInput, {nullable:false})
    create!: ShippingCreateWithoutOrderInput;
}
