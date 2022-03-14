import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementWhereInput } from './settlement-where.input';

@ArgsType()
export class DeleteManySettlementArgs {

    @Field(() => SettlementWhereInput, {nullable:true})
    where?: SettlementWhereInput;
}
