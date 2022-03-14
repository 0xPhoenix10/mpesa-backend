import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditUpdateInput } from './credit-update.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';

@ArgsType()
export class UpdateOneCreditArgs {

    @Field(() => CreditUpdateInput, {nullable:false})
    data!: CreditUpdateInput;

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;
}
