import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutCreditorInstallmentsInput } from './wallet-create-without-creditor-installments.input';

@InputType()
export class WalletCreateOrConnectWithoutCreditorInstallmentsInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutCreditorInstallmentsInput, {nullable:false})
    create!: WalletCreateWithoutCreditorInstallmentsInput;
}
