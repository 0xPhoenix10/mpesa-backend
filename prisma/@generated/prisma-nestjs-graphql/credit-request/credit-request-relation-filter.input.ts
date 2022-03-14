import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestWhereInput } from './credit-request-where.input';

@InputType()
export class CreditRequestRelationFilter {

    @Field(() => CreditRequestWhereInput, {nullable:true})
    is?: CreditRequestWhereInput;

    @Field(() => CreditRequestWhereInput, {nullable:true})
    isNot?: CreditRequestWhereInput;
}
