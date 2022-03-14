import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateWithoutQuestionInput } from './answer-create-without-question.input';
import { AnswerCreateOrConnectWithoutQuestionInput } from './answer-create-or-connect-without-question.input';
import { AnswerCreateManyQuestionInputEnvelope } from './answer-create-many-question-input-envelope.input';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';

@InputType()
export class AnswerCreateNestedManyWithoutQuestionInput {

    @Field(() => [AnswerCreateWithoutQuestionInput], {nullable:true})
    create?: Array<AnswerCreateWithoutQuestionInput>;

    @Field(() => [AnswerCreateOrConnectWithoutQuestionInput], {nullable:true})
    connectOrCreate?: Array<AnswerCreateOrConnectWithoutQuestionInput>;

    @Field(() => AnswerCreateManyQuestionInputEnvelope, {nullable:true})
    createMany?: AnswerCreateManyQuestionInputEnvelope;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AnswerWhereUniqueInput>;
}
