import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutDebtorInstallmentsInput } from './wallet-update-without-debtor-installments.input';
import { WalletCreateWithoutDebtorInstallmentsInput } from './wallet-create-without-debtor-installments.input';

@InputType()
export class WalletUpsertWithoutDebtorInstallmentsInput {

    @Field(() => WalletUpdateWithoutDebtorInstallmentsInput, {nullable:false})
    update!: WalletUpdateWithoutDebtorInstallmentsInput;

    @Field(() => WalletCreateWithoutDebtorInstallmentsInput, {nullable:false})
    create!: WalletCreateWithoutDebtorInstallmentsInput;
}
