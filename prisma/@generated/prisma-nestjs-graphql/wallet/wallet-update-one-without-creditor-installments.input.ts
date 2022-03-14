import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutCreditorInstallmentsInput } from './wallet-create-without-creditor-installments.input';
import { WalletCreateOrConnectWithoutCreditorInstallmentsInput } from './wallet-create-or-connect-without-creditor-installments.input';
import { WalletUpsertWithoutCreditorInstallmentsInput } from './wallet-upsert-without-creditor-installments.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutCreditorInstallmentsInput } from './wallet-update-without-creditor-installments.input';

@InputType()
export class WalletUpdateOneWithoutCreditorInstallmentsInput {

    @Field(() => WalletCreateWithoutCreditorInstallmentsInput, {nullable:true})
    create?: WalletCreateWithoutCreditorInstallmentsInput;

    @Field(() => WalletCreateOrConnectWithoutCreditorInstallmentsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutCreditorInstallmentsInput;

    @Field(() => WalletUpsertWithoutCreditorInstallmentsInput, {nullable:true})
    upsert?: WalletUpsertWithoutCreditorInstallmentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutCreditorInstallmentsInput, {nullable:true})
    update?: WalletUpdateWithoutCreditorInstallmentsInput;
}
