import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutAnswersInput } from './question-create-without-answers.input';
import { QuestionCreateOrConnectWithoutAnswersInput } from './question-create-or-connect-without-answers.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@InputType()
export class QuestionCreateNestedOneWithoutAnswersInput {

    @Field(() => QuestionCreateWithoutAnswersInput, {nullable:true})
    create?: QuestionCreateWithoutAnswersInput;

    @Field(() => QuestionCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput;

    @Field(() => QuestionWhereUniqueInput, {nullable:true})
    connect?: QuestionWhereUniqueInput;
}
