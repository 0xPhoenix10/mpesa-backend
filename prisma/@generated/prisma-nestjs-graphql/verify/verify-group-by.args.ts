import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyWhereInput } from './verify-where.input';
import { VerifyOrderByWithAggregationInput } from './verify-order-by-with-aggregation.input';
import { VerifyScalarFieldEnum } from './verify-scalar-field.enum';
import { VerifyScalarWhereWithAggregatesInput } from './verify-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VerifyCountAggregateInput } from './verify-count-aggregate.input';
import { VerifyMinAggregateInput } from './verify-min-aggregate.input';
import { VerifyMaxAggregateInput } from './verify-max-aggregate.input';

@ArgsType()
export class VerifyGroupByArgs {

    @Field(() => VerifyWhereInput, {nullable:true})
    where?: VerifyWhereInput;

    @Field(() => [VerifyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VerifyOrderByWithAggregationInput>;

    @Field(() => [VerifyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VerifyScalarFieldEnum>;

    @Field(() => VerifyScalarWhereWithAggregatesInput, {nullable:true})
    having?: VerifyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VerifyCountAggregateInput, {nullable:true})
    _count?: VerifyCountAggregateInput;

    @Field(() => VerifyMinAggregateInput, {nullable:true})
    _min?: VerifyMinAggregateInput;

    @Field(() => VerifyMaxAggregateInput, {nullable:true})
    _max?: VerifyMaxAggregateInput;
}
