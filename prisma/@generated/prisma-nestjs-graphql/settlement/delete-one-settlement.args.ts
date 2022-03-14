import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';

@ArgsType()
export class DeleteOneSettlementArgs {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;
}
