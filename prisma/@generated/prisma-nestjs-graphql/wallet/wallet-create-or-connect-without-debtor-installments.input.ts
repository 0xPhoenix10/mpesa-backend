import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutDebtorInstallmentsInput } from './wallet-create-without-debtor-installments.input';

@InputType()
export class WalletCreateOrConnectWithoutDebtorInstallmentsInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutDebtorInstallmentsInput, {nullable:false})
    create!: WalletCreateWithoutDebtorInstallmentsInput;
}
