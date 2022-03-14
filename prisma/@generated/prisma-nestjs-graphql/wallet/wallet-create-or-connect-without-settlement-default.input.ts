import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutSettlementDefaultInput } from './wallet-create-without-settlement-default.input';

@InputType()
export class WalletCreateOrConnectWithoutSettlementDefaultInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutSettlementDefaultInput, {nullable:false})
    create!: WalletCreateWithoutSettlementDefaultInput;
}
