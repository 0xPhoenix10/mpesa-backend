import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutCreditorCreditInput } from './wallet-create-without-creditor-credit.input';

@InputType()
export class WalletCreateOrConnectWithoutCreditorCreditInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutCreditorCreditInput, {nullable:false})
    create!: WalletCreateWithoutCreditorCreditInput;
}
