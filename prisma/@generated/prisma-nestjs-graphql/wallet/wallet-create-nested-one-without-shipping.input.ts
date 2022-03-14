import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutShippingInput } from './wallet-create-without-shipping.input';
import { WalletCreateOrConnectWithoutShippingInput } from './wallet-create-or-connect-without-shipping.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutShippingInput {

    @Field(() => WalletCreateWithoutShippingInput, {nullable:true})
    create?: WalletCreateWithoutShippingInput;

    @Field(() => WalletCreateOrConnectWithoutShippingInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutShippingInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
