import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestWhereInput } from './credit-request-where.input';

@ArgsType()
export class DeleteManyCreditRequestArgs {

    @Field(() => CreditRequestWhereInput, {nullable:true})
    where?: CreditRequestWhereInput;
}
