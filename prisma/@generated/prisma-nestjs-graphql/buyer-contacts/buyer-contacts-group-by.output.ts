import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BuyerContactsCountAggregate } from './buyer-contacts-count-aggregate.output';
import { BuyerContactsMinAggregate } from './buyer-contacts-min-aggregate.output';
import { BuyerContactsMaxAggregate } from './buyer-contacts-max-aggregate.output';

@ObjectType()
export class BuyerContactsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    walletId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => BuyerContactsCountAggregate, {nullable:true})
    _count?: BuyerContactsCountAggregate;

    @Field(() => BuyerContactsMinAggregate, {nullable:true})
    _min?: BuyerContactsMinAggregate;

    @Field(() => BuyerContactsMaxAggregate, {nullable:true})
    _max?: BuyerContactsMaxAggregate;
}
