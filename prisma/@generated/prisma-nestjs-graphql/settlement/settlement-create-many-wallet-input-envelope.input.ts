import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateManyWalletInput } from './settlement-create-many-wallet.input';

@InputType()
export class SettlementCreateManyWalletInputEnvelope {

    @Field(() => [SettlementCreateManyWalletInput], {nullable:false})
    data!: Array<SettlementCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
