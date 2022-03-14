import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutVendorSupplierInput } from './wallet-create-without-vendor-supplier.input';
import { WalletCreateOrConnectWithoutVendorSupplierInput } from './wallet-create-or-connect-without-vendor-supplier.input';
import { WalletUpsertWithoutVendorSupplierInput } from './wallet-upsert-without-vendor-supplier.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutVendorSupplierInput } from './wallet-update-without-vendor-supplier.input';

@InputType()
export class WalletUpdateOneRequiredWithoutVendorSupplierInput {

    @Field(() => WalletCreateWithoutVendorSupplierInput, {nullable:true})
    create?: WalletCreateWithoutVendorSupplierInput;

    @Field(() => WalletCreateOrConnectWithoutVendorSupplierInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutVendorSupplierInput;

    @Field(() => WalletUpsertWithoutVendorSupplierInput, {nullable:true})
    upsert?: WalletUpsertWithoutVendorSupplierInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutVendorSupplierInput, {nullable:true})
    update?: WalletUpdateWithoutVendorSupplierInput;
}
