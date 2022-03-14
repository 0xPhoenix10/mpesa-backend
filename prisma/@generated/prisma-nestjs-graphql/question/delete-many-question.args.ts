import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionWhereInput } from './question-where.input';

@ArgsType()
export class DeleteManyQuestionArgs {

    @Field(() => QuestionWhereInput, {nullable:true})
    where?: QuestionWhereInput;
}
