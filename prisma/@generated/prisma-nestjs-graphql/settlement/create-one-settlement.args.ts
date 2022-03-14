import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementCreateInput } from './settlement-create.input';

@ArgsType()
export class CreateOneSettlementArgs {

    @Field(() => SettlementCreateInput, {nullable:false})
    data!: SettlementCreateInput;
}
