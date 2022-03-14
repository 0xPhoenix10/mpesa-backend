import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';
import { User } from '../user/user.model';
import { Order } from '../order/order.model';
import { CreditConfiguration } from '../credit-configuration/credit-configuration.model';

@ObjectType()
export class CreditRequest {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => CreditRequestStatus, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof CreditRequestStatus;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    wallet!: string;

    @Field(() => String, {nullable:false})
    creditConfigurationId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Order, {nullable:true})
    order?: Order | null;

    @Field(() => CreditConfiguration, {nullable:true})
    creditConfiguration?: CreditConfiguration | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    proceedAt!: Date;
}
