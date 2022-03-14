import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutCreditorCreditInput } from './wallet-create-without-creditor-credit.input';
import { WalletCreateOrConnectWithoutCreditorCreditInput } from './wallet-create-or-connect-without-creditor-credit.input';
import { WalletUpsertWithoutCreditorCreditInput } from './wallet-upsert-without-creditor-credit.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutCreditorCreditInput } from './wallet-update-without-creditor-credit.input';

@InputType()
export class WalletUpdateOneWithoutCreditorCreditInput {

    @Field(() => WalletCreateWithoutCreditorCreditInput, {nullable:true})
    create?: WalletCreateWithoutCreditorCreditInput;

    @Field(() => WalletCreateOrConnectWithoutCreditorCreditInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutCreditorCreditInput;

    @Field(() => WalletUpsertWithoutCreditorCreditInput, {nullable:true})
    upsert?: WalletUpsertWithoutCreditorCreditInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutCreditorCreditInput, {nullable:true})
    update?: WalletUpdateWithoutCreditorCreditInput;
}
