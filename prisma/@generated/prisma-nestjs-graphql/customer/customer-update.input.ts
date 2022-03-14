import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateOneRequiredWithoutCustomerInput } from '../wallet/wallet-update-one-required-without-customer.input';
import { WalletUpdateOneRequiredWithoutVendorInput } from '../wallet/wallet-update-one-required-without-vendor.input';

@InputType()
export class CustomerUpdateInput {

    @Field(() => WalletUpdateOneRequiredWithoutCustomerInput, {nullable:true})
    customer?: WalletUpdateOneRequiredWithoutCustomerInput;

    @Field(() => WalletUpdateOneRequiredWithoutVendorInput, {nullable:true})
    vendor?: WalletUpdateOneRequiredWithoutVendorInput;
}
