import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditWhereInput } from './credit-where.input';
import { CreditOrderByWithAggregationInput } from './credit-order-by-with-aggregation.input';
import { CreditScalarFieldEnum } from './credit-scalar-field.enum';
import { CreditScalarWhereWithAggregatesInput } from './credit-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CreditCountAggregateInput } from './credit-count-aggregate.input';
import { CreditAvgAggregateInput } from './credit-avg-aggregate.input';
import { CreditSumAggregateInput } from './credit-sum-aggregate.input';
import { CreditMinAggregateInput } from './credit-min-aggregate.input';
import { CreditMaxAggregateInput } from './credit-max-aggregate.input';

@ArgsType()
export class CreditGroupByArgs {

    @Field(() => CreditWhereInput, {nullable:true})
    where?: CreditWhereInput;

    @Field(() => [CreditOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CreditOrderByWithAggregationInput>;

    @Field(() => [CreditScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CreditScalarFieldEnum>;

    @Field(() => CreditScalarWhereWithAggregatesInput, {nullable:true})
    having?: CreditScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CreditCountAggregateInput, {nullable:true})
    _count?: CreditCountAggregateInput;

    @Field(() => CreditAvgAggregateInput, {nullable:true})
    _avg?: CreditAvgAggregateInput;

    @Field(() => CreditSumAggregateInput, {nullable:true})
    _sum?: CreditSumAggregateInput;

    @Field(() => CreditMinAggregateInput, {nullable:true})
    _min?: CreditMinAggregateInput;

    @Field(() => CreditMaxAggregateInput, {nullable:true})
    _max?: CreditMaxAggregateInput;
}
