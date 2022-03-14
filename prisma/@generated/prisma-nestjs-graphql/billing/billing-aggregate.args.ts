import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingWhereInput } from './billing-where.input';
import { BillingOrderByWithRelationInput } from './billing-order-by-with-relation.input';
import { BillingWhereUniqueInput } from './billing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BillingCountAggregateInput } from './billing-count-aggregate.input';
import { BillingMinAggregateInput } from './billing-min-aggregate.input';
import { BillingMaxAggregateInput } from './billing-max-aggregate.input';

@ArgsType()
export class BillingAggregateArgs {

    @Field(() => BillingWhereInput, {nullable:true})
    where?: BillingWhereInput;

    @Field(() => [BillingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BillingOrderByWithRelationInput>;

    @Field(() => BillingWhereUniqueInput, {nullable:true})
    cursor?: BillingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BillingCountAggregateInput, {nullable:true})
    _count?: BillingCountAggregateInput;

    @Field(() => BillingMinAggregateInput, {nullable:true})
    _min?: BillingMinAggregateInput;

    @Field(() => BillingMaxAggregateInput, {nullable:true})
    _max?: BillingMaxAggregateInput;
}
