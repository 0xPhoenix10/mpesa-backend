import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionCreateInput } from './question-create.input';
import { QuestionUpdateInput } from './question-update.input';

@ArgsType()
export class UpsertOneQuestionArgs {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    where!: QuestionWhereUniqueInput;

    @Field(() => QuestionCreateInput, {nullable:false})
    create!: QuestionCreateInput;

    @Field(() => QuestionUpdateInput, {nullable:false})
    update!: QuestionUpdateInput;
}
