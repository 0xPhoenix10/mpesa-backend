import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutVendorSupplierInput } from './wallet-update-without-vendor-supplier.input';
import { WalletCreateWithoutVendorSupplierInput } from './wallet-create-without-vendor-supplier.input';

@InputType()
export class WalletUpsertWithoutVendorSupplierInput {

    @Field(() => WalletUpdateWithoutVendorSupplierInput, {nullable:false})
    update!: WalletUpdateWithoutVendorSupplierInput;

    @Field(() => WalletCreateWithoutVendorSupplierInput, {nullable:false})
    create!: WalletCreateWithoutVendorSupplierInput;
}
