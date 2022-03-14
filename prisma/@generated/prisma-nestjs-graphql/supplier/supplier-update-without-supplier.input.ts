import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateOneRequiredWithoutVendorSupplierInput } from '../wallet/wallet-update-one-required-without-vendor-supplier.input';

@InputType()
export class SupplierUpdateWithoutSupplierInput {

    @Field(() => WalletUpdateOneRequiredWithoutVendorSupplierInput, {nullable:true})
    vendor?: WalletUpdateOneRequiredWithoutVendorSupplierInput;
}
