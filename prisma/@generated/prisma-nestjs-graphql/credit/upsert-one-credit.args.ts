import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditCreateInput } from './credit-create.input';
import { CreditUpdateInput } from './credit-update.input';

@ArgsType()
export class UpsertOneCreditArgs {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditCreateInput, {nullable:false})
    create!: CreditCreateInput;

    @Field(() => CreditUpdateInput, {nullable:false})
    update!: CreditUpdateInput;
}
