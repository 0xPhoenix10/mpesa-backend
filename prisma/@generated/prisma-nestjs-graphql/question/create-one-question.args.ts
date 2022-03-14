import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionCreateInput } from './question-create.input';

@ArgsType()
export class CreateOneQuestionArgs {

    @Field(() => QuestionCreateInput, {nullable:false})
    data!: QuestionCreateInput;
}
