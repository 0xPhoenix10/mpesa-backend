import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionUpdateManyMutationInput } from './question-update-many-mutation.input';
import { QuestionWhereInput } from './question-where.input';

@ArgsType()
export class UpdateManyQuestionArgs {

    @Field(() => QuestionUpdateManyMutationInput, {nullable:false})
    data!: QuestionUpdateManyMutationInput;

    @Field(() => QuestionWhereInput, {nullable:true})
    where?: QuestionWhereInput;
}
