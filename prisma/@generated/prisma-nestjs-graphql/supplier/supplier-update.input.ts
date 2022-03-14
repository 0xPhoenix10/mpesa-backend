import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateOneRequiredWithoutSupplierInput } from '../wallet/wallet-update-one-required-without-supplier.input';
import { WalletUpdateOneRequiredWithoutVendorSupplierInput } from '../wallet/wallet-update-one-required-without-vendor-supplier.input';

@InputType()
export class SupplierUpdateInput {

    @Field(() => WalletUpdateOneRequiredWithoutSupplierInput, {nullable:true})
    supplier?: WalletUpdateOneRequiredWithoutSupplierInput;

    @Field(() => WalletUpdateOneRequiredWithoutVendorSupplierInput, {nullable:true})
    vendor?: WalletUpdateOneRequiredWithoutVendorSupplierInput;
}
