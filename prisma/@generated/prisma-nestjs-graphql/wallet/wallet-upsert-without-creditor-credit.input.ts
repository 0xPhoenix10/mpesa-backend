import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutCreditorCreditInput } from './wallet-update-without-creditor-credit.input';
import { WalletCreateWithoutCreditorCreditInput } from './wallet-create-without-creditor-credit.input';

@InputType()
export class WalletUpsertWithoutCreditorCreditInput {

    @Field(() => WalletUpdateWithoutCreditorCreditInput, {nullable:false})
    update!: WalletUpdateWithoutCreditorCreditInput;

    @Field(() => WalletCreateWithoutCreditorCreditInput, {nullable:false})
    create!: WalletCreateWithoutCreditorCreditInput;
}
