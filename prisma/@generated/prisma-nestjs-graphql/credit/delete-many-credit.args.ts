import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditWhereInput } from './credit-where.input';

@ArgsType()
export class DeleteManyCreditArgs {

    @Field(() => CreditWhereInput, {nullable:true})
    where?: CreditWhereInput;
}
