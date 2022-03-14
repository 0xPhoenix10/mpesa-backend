import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AnswerScalarWhereInput {

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    AND?: Array<AnswerScalarWhereInput>;

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    OR?: Array<AnswerScalarWhereInput>;

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    NOT?: Array<AnswerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    questionId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    answer?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    answeredBy?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    answeredByReference?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    account?: StringFilter;
}
