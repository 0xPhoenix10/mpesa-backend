import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutSettlementInput } from './wallet-create-without-settlement.input';
import { WalletCreateOrConnectWithoutSettlementInput } from './wallet-create-or-connect-without-settlement.input';
import { WalletUpsertWithoutSettlementInput } from './wallet-upsert-without-settlement.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutSettlementInput } from './wallet-update-without-settlement.input';

@InputType()
export class WalletUpdateOneRequiredWithoutSettlementInput {

    @Field(() => WalletCreateWithoutSettlementInput, {nullable:true})
    create?: WalletCreateWithoutSettlementInput;

    @Field(() => WalletCreateOrConnectWithoutSettlementInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutSettlementInput;

    @Field(() => WalletUpsertWithoutSettlementInput, {nullable:true})
    upsert?: WalletUpsertWithoutSettlementInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutSettlementInput, {nullable:true})
    update?: WalletUpdateWithoutSettlementInput;
}
