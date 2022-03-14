import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingCreateWithoutOrderInput } from './shipping-create-without-order.input';
import { ShippingCreateOrConnectWithoutOrderInput } from './shipping-create-or-connect-without-order.input';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';

@InputType()
export class ShippingCreateNestedOneWithoutOrderInput {

    @Field(() => ShippingCreateWithoutOrderInput, {nullable:true})
    create?: ShippingCreateWithoutOrderInput;

    @Field(() => ShippingCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: ShippingCreateOrConnectWithoutOrderInput;

    @Field(() => ShippingWhereUniqueInput, {nullable:true})
    connect?: ShippingWhereUniqueInput;
}
