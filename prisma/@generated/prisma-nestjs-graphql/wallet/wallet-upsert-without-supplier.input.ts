import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutSupplierInput } from './wallet-update-without-supplier.input';
import { WalletCreateWithoutSupplierInput } from './wallet-create-without-supplier.input';

@InputType()
export class WalletUpsertWithoutSupplierInput {

    @Field(() => WalletUpdateWithoutSupplierInput, {nullable:false})
    update!: WalletUpdateWithoutSupplierInput;

    @Field(() => WalletCreateWithoutSupplierInput, {nullable:false})
    create!: WalletCreateWithoutSupplierInput;
}
