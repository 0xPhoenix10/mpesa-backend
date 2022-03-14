import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutAnswersInput } from './question-create-without-answers.input';
import { QuestionCreateOrConnectWithoutAnswersInput } from './question-create-or-connect-without-answers.input';
import { QuestionUpsertWithoutAnswersInput } from './question-upsert-without-answers.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithoutAnswersInput } from './question-update-without-answers.input';

@InputType()
export class QuestionUpdateOneRequiredWithoutAnswersInput {

    @Field(() => QuestionCreateWithoutAnswersInput, {nullable:true})
    create?: QuestionCreateWithoutAnswersInput;

    @Field(() => QuestionCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput;

    @Field(() => QuestionUpsertWithoutAnswersInput, {nullable:true})
    upsert?: QuestionUpsertWithoutAnswersInput;

    @Field(() => QuestionWhereUniqueInput, {nullable:true})
    connect?: QuestionWhereUniqueInput;

    @Field(() => QuestionUpdateWithoutAnswersInput, {nullable:true})
    update?: QuestionUpdateWithoutAnswersInput;
}
