import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestUpdateInput } from './credit-request-update.input';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';

@ArgsType()
export class UpdateOneCreditRequestArgs {

    @Field(() => CreditRequestUpdateInput, {nullable:false})
    data!: CreditRequestUpdateInput;

    @Field(() => CreditRequestWhereUniqueInput, {nullable:false})
    where!: CreditRequestWhereUniqueInput;
}
