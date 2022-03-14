import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { ShippingUpdateWithoutWalletInput } from './shipping-update-without-wallet.input';

@InputType()
export class ShippingUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    where!: ShippingWhereUniqueInput;

    @Field(() => ShippingUpdateWithoutWalletInput, {nullable:false})
    data!: ShippingUpdateWithoutWalletInput;
}
