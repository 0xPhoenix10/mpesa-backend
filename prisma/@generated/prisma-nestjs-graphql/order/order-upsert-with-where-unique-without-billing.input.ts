import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutBillingInput } from './order-update-without-billing.input';
import { OrderCreateWithoutBillingInput } from './order-create-without-billing.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutBillingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutBillingInput, {nullable:false})
    update!: OrderUpdateWithoutBillingInput;

    @Field(() => OrderCreateWithoutBillingInput, {nullable:false})
    create!: OrderCreateWithoutBillingInput;
}
