import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementUpdateWithoutWalletInput } from './settlement-update-without-wallet.input';
import { SettlementCreateWithoutWalletInput } from './settlement-create-without-wallet.input';

@InputType()
export class SettlementUpsertWithoutWalletInput {

    @Field(() => SettlementUpdateWithoutWalletInput, {nullable:false})
    update!: SettlementUpdateWithoutWalletInput;

    @Field(() => SettlementCreateWithoutWalletInput, {nullable:false})
    create!: SettlementCreateWithoutWalletInput;
}
