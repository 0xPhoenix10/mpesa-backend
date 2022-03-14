import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LoginScalarWhereWithAggregatesInput {

    @Field(() => [LoginScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LoginScalarWhereWithAggregatesInput>;

    @Field(() => [LoginScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LoginScalarWhereWithAggregatesInput>;

    @Field(() => [LoginScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LoginScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    qrKey?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    jwt?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
