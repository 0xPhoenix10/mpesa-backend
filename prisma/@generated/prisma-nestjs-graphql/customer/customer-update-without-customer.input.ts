import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateOneRequiredWithoutVendorInput } from '../wallet/wallet-update-one-required-without-vendor.input';

@InputType()
export class CustomerUpdateWithoutCustomerInput {

    @Field(() => WalletUpdateOneRequiredWithoutVendorInput, {nullable:true})
    vendor?: WalletUpdateOneRequiredWithoutVendorInput;
}
