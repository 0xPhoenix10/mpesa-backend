import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutDebtorInstallmentsInput } from './wallet-create-without-debtor-installments.input';
import { WalletCreateOrConnectWithoutDebtorInstallmentsInput } from './wallet-create-or-connect-without-debtor-installments.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutDebtorInstallmentsInput {

    @Field(() => WalletCreateWithoutDebtorInstallmentsInput, {nullable:true})
    create?: WalletCreateWithoutDebtorInstallmentsInput;

    @Field(() => WalletCreateOrConnectWithoutDebtorInstallmentsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutDebtorInstallmentsInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
