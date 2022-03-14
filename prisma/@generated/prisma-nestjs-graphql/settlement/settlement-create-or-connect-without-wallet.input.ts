import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementCreateWithoutWalletInput } from './settlement-create-without-wallet.input';

@InputType()
export class SettlementCreateOrConnectWithoutWalletInput {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementCreateWithoutWalletInput, {nullable:false})
    create!: SettlementCreateWithoutWalletInput;
}
