import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateManyQuestionInput } from './answer-create-many-question.input';

@InputType()
export class AnswerCreateManyQuestionInputEnvelope {

    @Field(() => [AnswerCreateManyQuestionInput], {nullable:false})
    data!: Array<AnswerCreateManyQuestionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
