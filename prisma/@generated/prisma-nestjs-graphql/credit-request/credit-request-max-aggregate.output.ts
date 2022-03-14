import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';

@ObjectType()
export class CreditRequestMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CreditRequestStatus, {nullable:true})
    status?: keyof typeof CreditRequestStatus;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => String, {nullable:true})
    wallet?: string;

    @Field(() => String, {nullable:true})
    creditConfigurationId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    proceedAt?: Date | string;
}
