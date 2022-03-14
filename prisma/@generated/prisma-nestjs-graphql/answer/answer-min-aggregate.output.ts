import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AnswerMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    questionId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    answer?: string;

    @Field(() => String, {nullable:true})
    answeredBy?: string;

    @Field(() => String, {nullable:true})
    answeredByReference?: string;

    @Field(() => String, {nullable:true})
    account?: string;
}
