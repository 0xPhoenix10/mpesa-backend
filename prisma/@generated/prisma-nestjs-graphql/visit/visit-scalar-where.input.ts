import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class VisitScalarWhereInput {

    @Field(() => [VisitScalarWhereInput], {nullable:true})
    AND?: Array<VisitScalarWhereInput>;

    @Field(() => [VisitScalarWhereInput], {nullable:true})
    OR?: Array<VisitScalarWhereInput>;

    @Field(() => [VisitScalarWhereInput], {nullable:true})
    NOT?: Array<VisitScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    account?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    visitedBy?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    visitedByReference?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    whenVisitTookPlace?: DateTimeNullableFilter;
}
