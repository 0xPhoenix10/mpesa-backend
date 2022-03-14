import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestWhereInput } from './credit-request-where.input';
import { CreditRequestOrderByWithAggregationInput } from './credit-request-order-by-with-aggregation.input';
import { CreditRequestScalarFieldEnum } from './credit-request-scalar-field.enum';
import { CreditRequestScalarWhereWithAggregatesInput } from './credit-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CreditRequestCountAggregateInput } from './credit-request-count-aggregate.input';
import { CreditRequestMinAggregateInput } from './credit-request-min-aggregate.input';
import { CreditRequestMaxAggregateInput } from './credit-request-max-aggregate.input';

@ArgsType()
export class CreditRequestGroupByArgs {

    @Field(() => CreditRequestWhereInput, {nullable:true})
    where?: CreditRequestWhereInput;

    @Field(() => [CreditRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CreditRequestOrderByWithAggregationInput>;

    @Field(() => [CreditRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CreditRequestScalarFieldEnum>;

    @Field(() => CreditRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: CreditRequestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CreditRequestCountAggregateInput, {nullable:true})
    _count?: CreditRequestCountAggregateInput;

    @Field(() => CreditRequestMinAggregateInput, {nullable:true})
    _min?: CreditRequestMinAggregateInput;

    @Field(() => CreditRequestMaxAggregateInput, {nullable:true})
    _max?: CreditRequestMaxAggregateInput;
}
