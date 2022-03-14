import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementCreateManyInput } from './settlement-create-many.input';

@ArgsType()
export class CreateManySettlementArgs {

    @Field(() => [SettlementCreateManyInput], {nullable:false})
    data!: Array<SettlementCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
