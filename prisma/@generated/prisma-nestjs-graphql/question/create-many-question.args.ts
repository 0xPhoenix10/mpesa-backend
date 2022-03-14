import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionCreateManyInput } from './question-create-many.input';

@ArgsType()
export class CreateManyQuestionArgs {

    @Field(() => [QuestionCreateManyInput], {nullable:false})
    data!: Array<QuestionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
