import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutSettlementInput } from './wallet-create-without-settlement.input';

@InputType()
export class WalletCreateOrConnectWithoutSettlementInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutSettlementInput, {nullable:false})
    create!: WalletCreateWithoutSettlementInput;
}
