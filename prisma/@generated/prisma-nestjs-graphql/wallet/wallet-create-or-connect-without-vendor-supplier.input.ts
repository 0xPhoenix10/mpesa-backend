import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutVendorSupplierInput } from './wallet-create-without-vendor-supplier.input';

@InputType()
export class WalletCreateOrConnectWithoutVendorSupplierInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutVendorSupplierInput, {nullable:false})
    create!: WalletCreateWithoutVendorSupplierInput;
}
