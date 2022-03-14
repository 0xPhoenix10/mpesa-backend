import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutShippingInput } from './wallet-create-without-shipping.input';
import { WalletCreateOrConnectWithoutShippingInput } from './wallet-create-or-connect-without-shipping.input';
import { WalletUpsertWithoutShippingInput } from './wallet-upsert-without-shipping.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutShippingInput } from './wallet-update-without-shipping.input';

@InputType()
export class WalletUpdateOneWithoutShippingInput {

    @Field(() => WalletCreateWithoutShippingInput, {nullable:true})
    create?: WalletCreateWithoutShippingInput;

    @Field(() => WalletCreateOrConnectWithoutShippingInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutShippingInput;

    @Field(() => WalletUpsertWithoutShippingInput, {nullable:true})
    upsert?: WalletUpsertWithoutShippingInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutShippingInput, {nullable:true})
    update?: WalletUpdateWithoutShippingInput;
}
