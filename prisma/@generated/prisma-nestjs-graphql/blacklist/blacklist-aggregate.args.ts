import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistWhereInput } from './blacklist-where.input';
import { BlacklistOrderByWithRelationInput } from './blacklist-order-by-with-relation.input';
import { BlacklistWhereUniqueInput } from './blacklist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlacklistCountAggregateInput } from './blacklist-count-aggregate.input';
import { BlacklistMinAggregateInput } from './blacklist-min-aggregate.input';
import { BlacklistMaxAggregateInput } from './blacklist-max-aggregate.input';

@ArgsType()
export class BlacklistAggregateArgs {

    @Field(() => BlacklistWhereInput, {nullable:true})
    where?: BlacklistWhereInput;

    @Field(() => [BlacklistOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BlacklistOrderByWithRelationInput>;

    @Field(() => BlacklistWhereUniqueInput, {nullable:true})
    cursor?: BlacklistWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BlacklistCountAggregateInput, {nullable:true})
    _count?: BlacklistCountAggregateInput;

    @Field(() => BlacklistMinAggregateInput, {nullable:true})
    _min?: BlacklistMinAggregateInput;

    @Field(() => BlacklistMaxAggregateInput, {nullable:true})
    _max?: BlacklistMaxAggregateInput;
}
