import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutCreditorInstallmentsInput } from './wallet-update-without-creditor-installments.input';
import { WalletCreateWithoutCreditorInstallmentsInput } from './wallet-create-without-creditor-installments.input';

@InputType()
export class WalletUpsertWithoutCreditorInstallmentsInput {

    @Field(() => WalletUpdateWithoutCreditorInstallmentsInput, {nullable:false})
    update!: WalletUpdateWithoutCreditorInstallmentsInput;

    @Field(() => WalletCreateWithoutCreditorInstallmentsInput, {nullable:false})
    create!: WalletCreateWithoutCreditorInstallmentsInput;
}
