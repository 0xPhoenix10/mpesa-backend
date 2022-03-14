import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TrustScalarWhereWithAggregatesInput {

    @Field(() => [TrustScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TrustScalarWhereWithAggregatesInput>;

    @Field(() => [TrustScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TrustScalarWhereWithAggregatesInput>;

    @Field(() => [TrustScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TrustScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    account?: StringWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    trustRating?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    score?: FloatNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
