import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutSettlementInput } from './wallet-update-without-settlement.input';
import { WalletCreateWithoutSettlementInput } from './wallet-create-without-settlement.input';

@InputType()
export class WalletUpsertWithoutSettlementInput {

    @Field(() => WalletUpdateWithoutSettlementInput, {nullable:false})
    update!: WalletUpdateWithoutSettlementInput;

    @Field(() => WalletCreateWithoutSettlementInput, {nullable:false})
    create!: WalletCreateWithoutSettlementInput;
}
