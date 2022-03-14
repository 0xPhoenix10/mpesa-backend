import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';

@ArgsType()
export class DeleteOneCreditArgs {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;
}
