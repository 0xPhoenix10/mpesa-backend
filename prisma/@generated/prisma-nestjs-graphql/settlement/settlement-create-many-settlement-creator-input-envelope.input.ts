import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateManySettlementCreatorInput } from './settlement-create-many-settlement-creator.input';

@InputType()
export class SettlementCreateManySettlementCreatorInputEnvelope {

    @Field(() => [SettlementCreateManySettlementCreatorInput], {nullable:false})
    data!: Array<SettlementCreateManySettlementCreatorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
