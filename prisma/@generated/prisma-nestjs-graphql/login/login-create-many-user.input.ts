import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LoginCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    qrKey?: string;

    @Field(() => String, {nullable:true})
    jwt?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
