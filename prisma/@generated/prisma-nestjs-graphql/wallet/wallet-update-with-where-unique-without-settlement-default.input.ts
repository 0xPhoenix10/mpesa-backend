import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutSettlementDefaultInput } from './wallet-update-without-settlement-default.input';

@InputType()
export class WalletUpdateWithWhereUniqueWithoutSettlementDefaultInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutSettlementDefaultInput, {nullable:false})
    data!: WalletUpdateWithoutSettlementDefaultInput;
}
