import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutCustomerInput } from '../wallet/wallet-create-nested-one-without-customer.input';

@InputType()
export class CustomerCreateWithoutVendorInput {

    @Field(() => WalletCreateNestedOneWithoutCustomerInput, {nullable:false})
    customer!: WalletCreateNestedOneWithoutCustomerInput;
}
