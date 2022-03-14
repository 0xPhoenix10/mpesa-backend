import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@ArgsType()
export class FindUniqueQuestionArgs {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    where!: QuestionWhereUniqueInput;
}
