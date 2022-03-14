import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutBillingInput } from './wallet-create-without-billing.input';
import { WalletCreateOrConnectWithoutBillingInput } from './wallet-create-or-connect-without-billing.input';
import { WalletUpsertWithoutBillingInput } from './wallet-upsert-without-billing.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutBillingInput } from './wallet-update-without-billing.input';

@InputType()
export class WalletUpdateOneWithoutBillingInput {

    @Field(() => WalletCreateWithoutBillingInput, {nullable:true})
    create?: WalletCreateWithoutBillingInput;

    @Field(() => WalletCreateOrConnectWithoutBillingInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutBillingInput;

    @Field(() => WalletUpsertWithoutBillingInput, {nullable:true})
    upsert?: WalletUpsertWithoutBillingInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutBillingInput, {nullable:true})
    update?: WalletUpdateWithoutBillingInput;
}
