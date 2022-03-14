import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';
import { CreditRequestCreateInput } from './credit-request-create.input';
import { CreditRequestUpdateInput } from './credit-request-update.input';

@ArgsType()
export class UpsertOneCreditRequestArgs {

    @Field(() => CreditRequestWhereUniqueInput, {nullable:false})
    where!: CreditRequestWhereUniqueInput;

    @Field(() => CreditRequestCreateInput, {nullable:false})
    create!: CreditRequestCreateInput;

    @Field(() => CreditRequestUpdateInput, {nullable:false})
    update!: CreditRequestUpdateInput;
}
