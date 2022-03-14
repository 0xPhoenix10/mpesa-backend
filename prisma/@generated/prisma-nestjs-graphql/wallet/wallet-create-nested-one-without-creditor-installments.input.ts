import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutCreditorInstallmentsInput } from './wallet-create-without-creditor-installments.input';
import { WalletCreateOrConnectWithoutCreditorInstallmentsInput } from './wallet-create-or-connect-without-creditor-installments.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutCreditorInstallmentsInput {

    @Field(() => WalletCreateWithoutCreditorInstallmentsInput, {nullable:true})
    create?: WalletCreateWithoutCreditorInstallmentsInput;

    @Field(() => WalletCreateOrConnectWithoutCreditorInstallmentsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutCreditorInstallmentsInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
