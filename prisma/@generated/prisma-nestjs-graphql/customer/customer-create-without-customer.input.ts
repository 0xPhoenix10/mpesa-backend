import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutVendorInput } from '../wallet/wallet-create-nested-one-without-vendor.input';

@InputType()
export class CustomerCreateWithoutCustomerInput {

    @Field(() => WalletCreateNestedOneWithoutVendorInput, {nullable:false})
    vendor!: WalletCreateNestedOneWithoutVendorInput;
}
