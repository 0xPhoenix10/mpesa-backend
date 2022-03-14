import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyWhereInput } from './verify-where.input';
import { VerifyOrderByWithRelationInput } from './verify-order-by-with-relation.input';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VerifyCountAggregateInput } from './verify-count-aggregate.input';
import { VerifyMinAggregateInput } from './verify-min-aggregate.input';
import { VerifyMaxAggregateInput } from './verify-max-aggregate.input';

@ArgsType()
export class VerifyAggregateArgs {

    @Field(() => VerifyWhereInput, {nullable:true})
    where?: VerifyWhereInput;

    @Field(() => [VerifyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerifyOrderByWithRelationInput>;

    @Field(() => VerifyWhereUniqueInput, {nullable:true})
    cursor?: VerifyWhereUniqueInput;

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
