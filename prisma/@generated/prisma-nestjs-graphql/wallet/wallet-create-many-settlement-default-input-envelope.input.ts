import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateManySettlementDefaultInput } from './wallet-create-many-settlement-default.input';

@InputType()
export class WalletCreateManySettlementDefaultInputEnvelope {

    @Field(() => [WalletCreateManySettlementDefaultInput], {nullable:false})
    data!: Array<WalletCreateManySettlementDefaultInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
