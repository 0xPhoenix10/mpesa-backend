import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestWhereInput } from './credit-request-where.input';
import { CreditRequestOrderByWithRelationInput } from './credit-request-order-by-with-relation.input';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CreditRequestCountAggregateInput } from './credit-request-count-aggregate.input';
import { CreditRequestMinAggregateInput } from './credit-request-min-aggregate.input';
import { CreditRequestMaxAggregateInput } from './credit-request-max-aggregate.input';

@ArgsType()
export class CreditRequestAggregateArgs {

    @Field(() => CreditRequestWhereInput, {nullable:true})
    where?: CreditRequestWhereInput;

    @Field(() => [CreditRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CreditRequestOrderByWithRelationInput>;

    @Field(() => CreditRequestWhereUniqueInput, {nullable:true})
    cursor?: CreditRequestWhereUniqueInput;

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
