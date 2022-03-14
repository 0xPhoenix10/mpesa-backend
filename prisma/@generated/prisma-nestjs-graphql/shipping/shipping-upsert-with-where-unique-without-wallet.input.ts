import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { ShippingUpdateWithoutWalletInput } from './shipping-update-without-wallet.input';
import { ShippingCreateWithoutWalletInput } from './shipping-create-without-wallet.input';

@InputType()
export class ShippingUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    where!: ShippingWhereUniqueInput;

    @Field(() => ShippingUpdateWithoutWalletInput, {nullable:false})
    update!: ShippingUpdateWithoutWalletInput;

    @Field(() => ShippingCreateWithoutWalletInput, {nullable:false})
    create!: ShippingCreateWithoutWalletInput;
}
