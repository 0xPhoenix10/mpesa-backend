import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithoutWalletInput } from './settlement-update-without-wallet.input';
import { SettlementCreateWithoutWalletInput } from './settlement-create-without-wallet.input';

@InputType()
export class SettlementUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementUpdateWithoutWalletInput, {nullable:false})
    update!: SettlementUpdateWithoutWalletInput;

    @Field(() => SettlementCreateWithoutWalletInput, {nullable:false})
    create!: SettlementCreateWithoutWalletInput;
}
