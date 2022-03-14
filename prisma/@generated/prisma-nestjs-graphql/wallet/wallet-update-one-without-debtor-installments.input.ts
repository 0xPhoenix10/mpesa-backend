import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutDebtorInstallmentsInput } from './wallet-create-without-debtor-installments.input';
import { WalletCreateOrConnectWithoutDebtorInstallmentsInput } from './wallet-create-or-connect-without-debtor-installments.input';
import { WalletUpsertWithoutDebtorInstallmentsInput } from './wallet-upsert-without-debtor-installments.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutDebtorInstallmentsInput } from './wallet-update-without-debtor-installments.input';

@InputType()
export class WalletUpdateOneWithoutDebtorInstallmentsInput {

    @Field(() => WalletCreateWithoutDebtorInstallmentsInput, {nullable:true})
    create?: WalletCreateWithoutDebtorInstallmentsInput;

    @Field(() => WalletCreateOrConnectWithoutDebtorInstallmentsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutDebtorInstallmentsInput;

    @Field(() => WalletUpsertWithoutDebtorInstallmentsInput, {nullable:true})
    upsert?: WalletUpsertWithoutDebtorInstallmentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutDebtorInstallmentsInput, {nullable:true})
    update?: WalletUpdateWithoutDebtorInstallmentsInput;
}
