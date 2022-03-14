import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereInput } from './credit-where.input';

@InputType()
export class CreditListRelationFilter {

    @Field(() => CreditWhereInput, {nullable:true})
    every?: CreditWhereInput;

    @Field(() => CreditWhereInput, {nullable:true})
    some?: CreditWhereInput;

    @Field(() => CreditWhereInput, {nullable:true})
    none?: CreditWhereInput;
}
