import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionUpdateInput } from './question-update.input';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@ArgsType()
export class UpdateOneQuestionArgs {

    @Field(() => QuestionUpdateInput, {nullable:false})
    data!: QuestionUpdateInput;

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    where!: QuestionWhereUniqueInput;
}
