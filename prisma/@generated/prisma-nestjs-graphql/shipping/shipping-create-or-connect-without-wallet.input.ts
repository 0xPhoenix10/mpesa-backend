import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { ShippingCreateWithoutWalletInput } from './shipping-create-without-wallet.input';

@InputType()
export class ShippingCreateOrConnectWithoutWalletInput {

    @Field(() => ShippingWhereUniqueInput, {nullable:false})
    where!: ShippingWhereUniqueInput;

    @Field(() => ShippingCreateWithoutWalletInput, {nullable:false})
    create!: ShippingCreateWithoutWalletInput;
}
