import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutSettlementDefaultInput } from './wallet-update-without-settlement-default.input';
import { WalletCreateWithoutSettlementDefaultInput } from './wallet-create-without-settlement-default.input';

@InputType()
export class WalletUpsertWithWhereUniqueWithoutSettlementDefaultInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutSettlementDefaultInput, {nullable:false})
    update!: WalletUpdateWithoutSettlementDefaultInput;

    @Field(() => WalletCreateWithoutSettlementDefaultInput, {nullable:false})
    create!: WalletCreateWithoutSettlementDefaultInput;
}
