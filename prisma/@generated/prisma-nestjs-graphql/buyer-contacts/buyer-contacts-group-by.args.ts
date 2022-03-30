import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsWhereInput } from './buyer-contacts-where.input';
import { BuyerContactsOrderByWithAggregationInput } from './buyer-contacts-order-by-with-aggregation.input';
import { BuyerContactsScalarFieldEnum } from './buyer-contacts-scalar-field.enum';
import { BuyerContactsScalarWhereWithAggregatesInput } from './buyer-contacts-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BuyerContactsCountAggregateInput } from './buyer-contacts-count-aggregate.input';
import { BuyerContactsMinAggregateInput } from './buyer-contacts-min-aggregate.input';
import { BuyerContactsMaxAggregateInput } from './buyer-contacts-max-aggregate.input';

@ArgsType()
export class BuyerContactsGroupByArgs {

    @Field(() => BuyerContactsWhereInput, {nullable:true})
    where?: BuyerContactsWhereInput;

    @Field(() => [BuyerContactsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BuyerContactsOrderByWithAggregationInput>;

    @Field(() => [BuyerContactsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BuyerContactsScalarFieldEnum>;

    @Field(() => BuyerContactsScalarWhereWithAggregatesInput, {nullable:true})
    having?: BuyerContactsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BuyerContactsCountAggregateInput, {nullable:true})
    _count?: BuyerContactsCountAggregateInput;

    @Field(() => BuyerContactsMinAggregateInput, {nullable:true})
    _min?: BuyerContactsMinAggregateInput;

    @Field(() => BuyerContactsMaxAggregateInput, {nullable:true})
    _max?: BuyerContactsMaxAggregateInput;
}
