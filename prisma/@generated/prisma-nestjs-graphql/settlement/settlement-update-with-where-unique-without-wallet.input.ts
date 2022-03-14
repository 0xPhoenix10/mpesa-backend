import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithoutWalletInput } from './settlement-update-without-wallet.input';

@InputType()
export class SettlementUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementUpdateWithoutWalletInput, {nullable:false})
    data!: SettlementUpdateWithoutWalletInput;
}
