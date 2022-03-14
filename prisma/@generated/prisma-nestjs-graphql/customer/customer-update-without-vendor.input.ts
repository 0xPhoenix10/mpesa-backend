import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateOneRequiredWithoutCustomerInput } from '../wallet/wallet-update-one-required-without-customer.input';

@InputType()
export class CustomerUpdateWithoutVendorInput {

    @Field(() => WalletUpdateOneRequiredWithoutCustomerInput, {nullable:true})
    customer?: WalletUpdateOneRequiredWithoutCustomerInput;
}
