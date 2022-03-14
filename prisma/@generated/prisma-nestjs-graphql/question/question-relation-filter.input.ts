import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereInput } from './question-where.input';

@InputType()
export class QuestionRelationFilter {

    @Field(() => QuestionWhereInput, {nullable:true})
    is?: QuestionWhereInput;

    @Field(() => QuestionWhereInput, {nullable:true})
    isNot?: QuestionWhereInput;
}
