import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutDebtorCreditInput } from './wallet-create-without-debtor-credit.input';
import { WalletCreateOrConnectWithoutDebtorCreditInput } from './wallet-create-or-connect-without-debtor-credit.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutDebtorCreditInput {

    @Field(() => WalletCreateWithoutDebtorCreditInput, {nullable:true})
    create?: WalletCreateWithoutDebtorCreditInput;

    @Field(() => WalletCreateOrConnectWithoutDebtorCreditInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutDebtorCreditInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
