import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutCustomerInput } from '../wallet/wallet-create-nested-one-without-customer.input';
import { WalletCreateNestedOneWithoutVendorInput } from '../wallet/wallet-create-nested-one-without-vendor.input';

@InputType()
export class CustomerCreateInput {

    @Field(() => WalletCreateNestedOneWithoutCustomerInput, {nullable:false})
    customer!: WalletCreateNestedOneWithoutCustomerInput;

    @Field(() => WalletCreateNestedOneWithoutVendorInput, {nullable:false})
    vendor!: WalletCreateNestedOneWithoutVendorInput;
}
