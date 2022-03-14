import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutDebtorCreditInput } from './wallet-create-without-debtor-credit.input';
import { WalletCreateOrConnectWithoutDebtorCreditInput } from './wallet-create-or-connect-without-debtor-credit.input';
import { WalletUpsertWithoutDebtorCreditInput } from './wallet-upsert-without-debtor-credit.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutDebtorCreditInput } from './wallet-update-without-debtor-credit.input';

@InputType()
export class WalletUpdateOneWithoutDebtorCreditInput {

    @Field(() => WalletCreateWithoutDebtorCreditInput, {nullable:true})
    create?: WalletCreateWithoutDebtorCreditInput;

    @Field(() => WalletCreateOrConnectWithoutDebtorCreditInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutDebtorCreditInput;

    @Field(() => WalletUpsertWithoutDebtorCreditInput, {nullable:true})
    upsert?: WalletUpsertWithoutDebtorCreditInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutDebtorCreditInput, {nullable:true})
    update?: WalletUpdateWithoutDebtorCreditInput;
}
