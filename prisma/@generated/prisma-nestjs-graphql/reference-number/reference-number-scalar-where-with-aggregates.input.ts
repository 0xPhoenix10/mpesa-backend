import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class ReferenceNumberScalarWhereWithAggregatesInput {

    @Field(() => [ReferenceNumberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReferenceNumberScalarWhereWithAggregatesInput>;

    @Field(() => [ReferenceNumberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReferenceNumberScalarWhereWithAggregatesInput>;

    @Field(() => [ReferenceNumberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReferenceNumberScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    prefix?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    lastReference?: IntNullableWithAggregatesFilter;
}
