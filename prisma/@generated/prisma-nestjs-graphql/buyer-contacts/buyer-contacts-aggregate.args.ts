import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsWhereInput } from './buyer-contacts-where.input';
import { BuyerContactsOrderByWithRelationInput } from './buyer-contacts-order-by-with-relation.input';
import { BuyerContactsWhereUniqueInput } from './buyer-contacts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BuyerContactsCountAggregateInput } from './buyer-contacts-count-aggregate.input';
import { BuyerContactsMinAggregateInput } from './buyer-contacts-min-aggregate.input';
import { BuyerContactsMaxAggregateInput } from './buyer-contacts-max-aggregate.input';

@ArgsType()
export class BuyerContactsAggregateArgs {

    @Field(() => BuyerContactsWhereInput, {nullable:true})
    where?: BuyerContactsWhereInput;

    @Field(() => [BuyerContactsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BuyerContactsOrderByWithRelationInput>;

    @Field(() => BuyerContactsWhereUniqueInput, {nullable:true})
    cursor?: BuyerContactsWhereUniqueInput;

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
