import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingUpdateWithoutOrderInput } from './shipping-update-without-order.input';
import { ShippingCreateWithoutOrderInput } from './shipping-create-without-order.input';

@InputType()
export class ShippingUpsertWithoutOrderInput {

    @Field(() => ShippingUpdateWithoutOrderInput, {nullable:false})
    update!: ShippingUpdateWithoutOrderInput;

    @Field(() => ShippingCreateWithoutOrderInput, {nullable:false})
    create!: ShippingCreateWithoutOrderInput;
}
