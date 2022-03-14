import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitWhereInput } from './visit-where.input';
import { VisitOrderByWithRelationInput } from './visit-order-by-with-relation.input';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VisitCountAggregateInput } from './visit-count-aggregate.input';
import { VisitMinAggregateInput } from './visit-min-aggregate.input';
import { VisitMaxAggregateInput } from './visit-max-aggregate.input';

@ArgsType()
export class VisitAggregateArgs {

    @Field(() => VisitWhereInput, {nullable:true})
    where?: VisitWhereInput;

    @Field(() => [VisitOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VisitOrderByWithRelationInput>;

    @Field(() => VisitWhereUniqueInput, {nullable:true})
    cursor?: VisitWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VisitCountAggregateInput, {nullable:true})
    _count?: VisitCountAggregateInput;

    @Field(() => VisitMinAggregateInput, {nullable:true})
    _min?: VisitMinAggregateInput;

    @Field(() => VisitMaxAggregateInput, {nullable:true})
    _max?: VisitMaxAggregateInput;
}
