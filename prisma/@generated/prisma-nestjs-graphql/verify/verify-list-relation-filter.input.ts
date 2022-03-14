import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifyWhereInput } from './verify-where.input';

@InputType()
export class VerifyListRelationFilter {

    @Field(() => VerifyWhereInput, {nullable:true})
    every?: VerifyWhereInput;

    @Field(() => VerifyWhereInput, {nullable:true})
    some?: VerifyWhereInput;

    @Field(() => VerifyWhereInput, {nullable:true})
    none?: VerifyWhereInput;
}
