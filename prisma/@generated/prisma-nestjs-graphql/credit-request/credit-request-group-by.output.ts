import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';
import { CreditRequestCountAggregate } from './credit-request-count-aggregate.output';
import { CreditRequestMinAggregate } from './credit-request-min-aggregate.output';
import { CreditRequestMaxAggregate } from './credit-request-max-aggregate.output';

@ObjectType()
export class CreditRequestGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => CreditRequestStatus, {nullable:false})
    status!: keyof typeof CreditRequestStatus;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    wallet!: string;

    @Field(() => String, {nullable:false})
    creditConfigurationId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    proceedAt!: Date | string;

    @Field(() => CreditRequestCountAggregate, {nullable:true})
    _count?: CreditRequestCountAggregate;

    @Field(() => CreditRequestMinAggregate, {nullable:true})
    _min?: CreditRequestMinAggregate;

    @Field(() => CreditRequestMaxAggregate, {nullable:true})
    _max?: CreditRequestMaxAggregate;
}
