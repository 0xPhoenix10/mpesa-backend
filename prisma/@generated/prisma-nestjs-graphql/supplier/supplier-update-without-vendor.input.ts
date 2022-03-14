import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateOneRequiredWithoutSupplierInput } from '../wallet/wallet-update-one-required-without-supplier.input';

@InputType()
export class SupplierUpdateWithoutVendorInput {

    @Field(() => WalletUpdateOneRequiredWithoutSupplierInput, {nullable:true})
    supplier?: WalletUpdateOneRequiredWithoutSupplierInput;
}
