import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutSettlementInput } from './wallet-create-without-settlement.input';
import { WalletCreateOrConnectWithoutSettlementInput } from './wallet-create-or-connect-without-settlement.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutSettlementInput {

    @Field(() => WalletCreateWithoutSettlementInput, {nullable:true})
    create?: WalletCreateWithoutSettlementInput;

    @Field(() => WalletCreateOrConnectWithoutSettlementInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutSettlementInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
