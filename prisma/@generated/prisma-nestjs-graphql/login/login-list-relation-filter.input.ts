import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginWhereInput } from './login-where.input';

@InputType()
export class LoginListRelationFilter {

    @Field(() => LoginWhereInput, {nullable:true})
    every?: LoginWhereInput;

    @Field(() => LoginWhereInput, {nullable:true})
    some?: LoginWhereInput;

    @Field(() => LoginWhereInput, {nullable:true})
    none?: LoginWhereInput;
}
