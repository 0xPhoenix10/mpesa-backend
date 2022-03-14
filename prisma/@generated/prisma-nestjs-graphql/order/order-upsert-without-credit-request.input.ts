import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutCreditRequestInput } from './order-update-without-credit-request.input';
import { OrderCreateWithoutCreditRequestInput } from './order-create-without-credit-request.input';

@InputType()
export class OrderUpsertWithoutCreditRequestInput {

    @Field(() => OrderUpdateWithoutCreditRequestInput, {nullable:false})
    update!: OrderUpdateWithoutCreditRequestInput;

    @Field(() => OrderCreateWithoutCreditRequestInput, {nullable:false})
    create!: OrderCreateWithoutCreditRequestInput;
}
