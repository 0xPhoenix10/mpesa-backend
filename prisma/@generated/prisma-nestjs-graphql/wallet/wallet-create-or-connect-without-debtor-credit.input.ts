import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutDebtorCreditInput } from './wallet-create-without-debtor-credit.input';

@InputType()
export class WalletCreateOrConnectWithoutDebtorCreditInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutDebtorCreditInput, {nullable:false})
    create!: WalletCreateWithoutDebtorCreditInput;
}
