import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutBillingInput } from './order-create-without-billing.input';

@InputType()
export class OrderCreateOrConnectWithoutBillingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutBillingInput, {nullable:false})
    create!: OrderCreateWithoutBillingInput;
}
