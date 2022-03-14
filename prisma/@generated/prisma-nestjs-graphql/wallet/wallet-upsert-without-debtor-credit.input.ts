import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutDebtorCreditInput } from './wallet-update-without-debtor-credit.input';
import { WalletCreateWithoutDebtorCreditInput } from './wallet-create-without-debtor-credit.input';

@InputType()
export class WalletUpsertWithoutDebtorCreditInput {

    @Field(() => WalletUpdateWithoutDebtorCreditInput, {nullable:false})
    update!: WalletUpdateWithoutDebtorCreditInput;

    @Field(() => WalletCreateWithoutDebtorCreditInput, {nullable:false})
    create!: WalletCreateWithoutDebtorCreditInput;
}
