import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutSupplierInput } from './wallet-create-without-supplier.input';
import { WalletCreateOrConnectWithoutSupplierInput } from './wallet-create-or-connect-without-supplier.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutSupplierInput {

    @Field(() => WalletCreateWithoutSupplierInput, {nullable:true})
    create?: WalletCreateWithoutSupplierInput;

    @Field(() => WalletCreateOrConnectWithoutSupplierInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutSupplierInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
