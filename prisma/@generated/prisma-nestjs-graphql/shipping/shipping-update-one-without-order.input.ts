import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingCreateWithoutOrderInput } from './shipping-create-without-order.input';
import { ShippingCreateOrConnectWithoutOrderInput } from './shipping-create-or-connect-without-order.input';
import { ShippingUpsertWithoutOrderInput } from './shipping-upsert-without-order.input';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { ShippingUpdateWithoutOrderInput } from './shipping-update-without-order.input';

@InputType()
export class ShippingUpdateOneWithoutOrderInput {

    @Field(() => ShippingCreateWithoutOrderInput, {nullable:true})
    create?: ShippingCreateWithoutOrderInput;

    @Field(() => ShippingCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: ShippingCreateOrConnectWithoutOrderInput;

    @Field(() => ShippingUpsertWithoutOrderInput, {nullable:true})
    upsert?: ShippingUpsertWithoutOrderInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ShippingWhereUniqueInput, {nullable:true})
    connect?: ShippingWhereUniqueInput;

    @Field(() => ShippingUpdateWithoutOrderInput, {nullable:true})
    update?: ShippingUpdateWithoutOrderInput;
}
