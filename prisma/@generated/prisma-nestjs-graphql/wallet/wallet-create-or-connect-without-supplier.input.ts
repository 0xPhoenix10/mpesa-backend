import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutSupplierInput } from './wallet-create-without-supplier.input';

@InputType()
export class WalletCreateOrConnectWithoutSupplierInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutSupplierInput, {nullable:false})
    create!: WalletCreateWithoutSupplierInput;
}
