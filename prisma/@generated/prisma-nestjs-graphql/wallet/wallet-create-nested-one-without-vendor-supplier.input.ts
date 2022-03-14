import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutVendorSupplierInput } from './wallet-create-without-vendor-supplier.input';
import { WalletCreateOrConnectWithoutVendorSupplierInput } from './wallet-create-or-connect-without-vendor-supplier.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutVendorSupplierInput {

    @Field(() => WalletCreateWithoutVendorSupplierInput, {nullable:true})
    create?: WalletCreateWithoutVendorSupplierInput;

    @Field(() => WalletCreateOrConnectWithoutVendorSupplierInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutVendorSupplierInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
