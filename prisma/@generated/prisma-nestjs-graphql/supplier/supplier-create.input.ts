import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutSupplierInput } from '../wallet/wallet-create-nested-one-without-supplier.input';
import { WalletCreateNestedOneWithoutVendorSupplierInput } from '../wallet/wallet-create-nested-one-without-vendor-supplier.input';

@InputType()
export class SupplierCreateInput {

    @Field(() => WalletCreateNestedOneWithoutSupplierInput, {nullable:false})
    supplier!: WalletCreateNestedOneWithoutSupplierInput;

    @Field(() => WalletCreateNestedOneWithoutVendorSupplierInput, {nullable:false})
    vendor!: WalletCreateNestedOneWithoutVendorSupplierInput;
}
