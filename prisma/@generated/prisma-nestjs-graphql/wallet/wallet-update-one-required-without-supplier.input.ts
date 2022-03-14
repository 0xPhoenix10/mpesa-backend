import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutSupplierInput } from './wallet-create-without-supplier.input';
import { WalletCreateOrConnectWithoutSupplierInput } from './wallet-create-or-connect-without-supplier.input';
import { WalletUpsertWithoutSupplierInput } from './wallet-upsert-without-supplier.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutSupplierInput } from './wallet-update-without-supplier.input';

@InputType()
export class WalletUpdateOneRequiredWithoutSupplierInput {

    @Field(() => WalletCreateWithoutSupplierInput, {nullable:true})
    create?: WalletCreateWithoutSupplierInput;

    @Field(() => WalletCreateOrConnectWithoutSupplierInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutSupplierInput;

    @Field(() => WalletUpsertWithoutSupplierInput, {nullable:true})
    upsert?: WalletUpsertWithoutSupplierInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutSupplierInput, {nullable:true})
    update?: WalletUpdateWithoutSupplierInput;
}
