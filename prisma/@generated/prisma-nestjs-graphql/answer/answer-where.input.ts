import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { QuestionRelationFilter } from '../question/question-relation-filter.input';

@InputType()
export class AnswerWhereInput {

    @Field(() => [AnswerWhereInput], {nullable:true})
    AND?: Array<AnswerWhereInput>;

    @Field(() => [AnswerWhereInput], {nullable:true})
    OR?: Array<AnswerWhereInput>;

    @Field(() => [AnswerWhereInput], {nullable:true})
    NOT?: Array<AnswerWhereInput>;

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

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    answered?: UserRelationFilter;

    @Field(() => QuestionRelationFilter, {nullable:true})
    question?: QuestionRelationFilter;
}
