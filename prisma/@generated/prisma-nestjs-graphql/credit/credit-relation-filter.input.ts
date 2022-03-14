import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereInput } from './credit-where.input';

@InputType()
export class CreditRelationFilter {

    @Field(() => CreditWhereInput, {nullable:true})
    is?: CreditWhereInput;

    @Field(() => CreditWhereInput, {nullable:true})
    isNot?: CreditWhereInput;
}
