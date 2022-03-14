import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAnswersInput } from '../user/user-create-nested-one-without-answers.input';
import { QuestionCreateNestedOneWithoutAnswersInput } from '../question/question-create-nested-one-without-answers.input';

@InputType()
export class AnswerCreateWithoutWalletInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    answer!: string;

    @Field(() => String, {nullable:true})
    answeredByReference?: string;

    @Field(() => UserCreateNestedOneWithoutAnswersInput, {nullable:true})
    answered?: UserCreateNestedOneWithoutAnswersInput;

    @Field(() => QuestionCreateNestedOneWithoutAnswersInput, {nullable:false})
    question!: QuestionCreateNestedOneWithoutAnswersInput;
}
