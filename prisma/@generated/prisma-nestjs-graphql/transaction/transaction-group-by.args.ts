import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';
import { TransactionOrderByWithAggregationInput } from './transaction-order-by-with-aggregation.input';
import { TransactionScalarFieldEnum } from './transaction-scalar-field.enum';
import { TransactionScalarWhereWithAggregatesInput } from './transaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TransactionCountAggregateInput } from './transaction-count-aggregate.input';
import { TransactionAvgAggregateInput } from './transaction-avg-aggregate.input';
import { TransactionSumAggregateInput } from './transaction-sum-aggregate.input';
import { TransactionMinAggregateInput } from './transaction-min-aggregate.input';
import { TransactionMaxAggregateInput } from './transaction-max-aggregate.input';

@ArgsType()
export class TransactionGroupByArgs {

    @Field(() => TransactionWhereInput, {nullable:true})
    where?: TransactionWhereInput;

    @Field(() => [TransactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TransactionOrderByWithAggregationInput>;

    @Field(() => [TransactionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TransactionScalarFieldEnum>;

    @Field(() => TransactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: TransactionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TransactionCountAggregateInput, {nullable:true})
    _count?: TransactionCountAggregateInput;

    @Field(() => TransactionAvgAggregateInput, {nullable:true})
    _avg?: TransactionAvgAggregateInput;

    @Field(() => TransactionSumAggregateInput, {nullable:true})
    _sum?: TransactionSumAggregateInput;

    @Field(() => TransactionMinAggregateInput, {nullable:true})
    _min?: TransactionMinAggregateInput;

    @Field(() => TransactionMaxAggregateInput, {nullable:true})
    _max?: TransactionMaxAggregateInput;
}
