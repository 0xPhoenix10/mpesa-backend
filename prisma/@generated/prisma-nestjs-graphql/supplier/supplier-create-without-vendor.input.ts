import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutSupplierInput } from '../wallet/wallet-create-nested-one-without-supplier.input';

@InputType()
export class SupplierCreateWithoutVendorInput {

    @Field(() => WalletCreateNestedOneWithoutSupplierInput, {nullable:false})
    supplier!: WalletCreateNestedOneWithoutSupplierInput;
}
