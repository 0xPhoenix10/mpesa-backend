import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitWhereInput } from './visit-where.input';
import { VisitOrderByWithAggregationInput } from './visit-order-by-with-aggregation.input';
import { VisitScalarFieldEnum } from './visit-scalar-field.enum';
import { VisitScalarWhereWithAggregatesInput } from './visit-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VisitCountAggregateInput } from './visit-count-aggregate.input';
import { VisitMinAggregateInput } from './visit-min-aggregate.input';
import { VisitMaxAggregateInput } from './visit-max-aggregate.input';

@ArgsType()
export class VisitGroupByArgs {

    @Field(() => VisitWhereInput, {nullable:true})
    where?: VisitWhereInput;

    @Field(() => [VisitOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VisitOrderByWithAggregationInput>;

    @Field(() => [VisitScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VisitScalarFieldEnum>;

    @Field(() => VisitScalarWhereWithAggregatesInput, {nullable:true})
    having?: VisitScalarWhereWithAggregatesInput;

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
