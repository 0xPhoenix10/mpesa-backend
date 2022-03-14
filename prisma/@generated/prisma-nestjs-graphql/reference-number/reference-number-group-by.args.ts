import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberWhereInput } from './reference-number-where.input';
import { ReferenceNumberOrderByWithAggregationInput } from './reference-number-order-by-with-aggregation.input';
import { ReferenceNumberScalarFieldEnum } from './reference-number-scalar-field.enum';
import { ReferenceNumberScalarWhereWithAggregatesInput } from './reference-number-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReferenceNumberCountAggregateInput } from './reference-number-count-aggregate.input';
import { ReferenceNumberAvgAggregateInput } from './reference-number-avg-aggregate.input';
import { ReferenceNumberSumAggregateInput } from './reference-number-sum-aggregate.input';
import { ReferenceNumberMinAggregateInput } from './reference-number-min-aggregate.input';
import { ReferenceNumberMaxAggregateInput } from './reference-number-max-aggregate.input';

@ArgsType()
export class ReferenceNumberGroupByArgs {

    @Field(() => ReferenceNumberWhereInput, {nullable:true})
    where?: ReferenceNumberWhereInput;

    @Field(() => [ReferenceNumberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReferenceNumberOrderByWithAggregationInput>;

    @Field(() => [ReferenceNumberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReferenceNumberScalarFieldEnum>;

    @Field(() => ReferenceNumberScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReferenceNumberScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReferenceNumberCountAggregateInput, {nullable:true})
    _count?: ReferenceNumberCountAggregateInput;

    @Field(() => ReferenceNumberAvgAggregateInput, {nullable:true})
    _avg?: ReferenceNumberAvgAggregateInput;

    @Field(() => ReferenceNumberSumAggregateInput, {nullable:true})
    _sum?: ReferenceNumberSumAggregateInput;

    @Field(() => ReferenceNumberMinAggregateInput, {nullable:true})
    _min?: ReferenceNumberMinAggregateInput;

    @Field(() => ReferenceNumberMaxAggregateInput, {nullable:true})
    _max?: ReferenceNumberMaxAggregateInput;
}
