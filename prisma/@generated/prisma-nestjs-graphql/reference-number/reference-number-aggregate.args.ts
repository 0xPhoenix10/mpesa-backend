import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberWhereInput } from './reference-number-where.input';
import { ReferenceNumberOrderByWithRelationInput } from './reference-number-order-by-with-relation.input';
import { ReferenceNumberWhereUniqueInput } from './reference-number-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReferenceNumberCountAggregateInput } from './reference-number-count-aggregate.input';
import { ReferenceNumberAvgAggregateInput } from './reference-number-avg-aggregate.input';
import { ReferenceNumberSumAggregateInput } from './reference-number-sum-aggregate.input';
import { ReferenceNumberMinAggregateInput } from './reference-number-min-aggregate.input';
import { ReferenceNumberMaxAggregateInput } from './reference-number-max-aggregate.input';

@ArgsType()
export class ReferenceNumberAggregateArgs {

    @Field(() => ReferenceNumberWhereInput, {nullable:true})
    where?: ReferenceNumberWhereInput;

    @Field(() => [ReferenceNumberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReferenceNumberOrderByWithRelationInput>;

    @Field(() => ReferenceNumberWhereUniqueInput, {nullable:true})
    cursor?: ReferenceNumberWhereUniqueInput;

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
