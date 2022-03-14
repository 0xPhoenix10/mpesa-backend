import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutVendorSupplierInput } from '../wallet/wallet-create-nested-one-without-vendor-supplier.input';

@InputType()
export class SupplierCreateWithoutSupplierInput {

    @Field(() => WalletCreateNestedOneWithoutVendorSupplierInput, {nullable:false})
    vendor!: WalletCreateNestedOneWithoutVendorSupplierInput;
}
