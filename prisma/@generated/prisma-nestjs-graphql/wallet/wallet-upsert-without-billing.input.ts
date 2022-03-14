import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutBillingInput } from './wallet-update-without-billing.input';
import { WalletCreateWithoutBillingInput } from './wallet-create-without-billing.input';

@InputType()
export class WalletUpsertWithoutBillingInput {

    @Field(() => WalletUpdateWithoutBillingInput, {nullable:false})
    update!: WalletUpdateWithoutBillingInput;

    @Field(() => WalletCreateWithoutBillingInput, {nullable:false})
    create!: WalletCreateWithoutBillingInput;
}
