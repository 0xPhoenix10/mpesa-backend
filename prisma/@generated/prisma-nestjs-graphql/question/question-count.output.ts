import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QuestionCount {

    @Field(() => Int, {nullable:false})
    answers?: number;
}
