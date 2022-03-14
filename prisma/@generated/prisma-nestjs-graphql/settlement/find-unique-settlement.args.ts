import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';

@ArgsType()
export class FindUniqueSettlementArgs {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;
}
