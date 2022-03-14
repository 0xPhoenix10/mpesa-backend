import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutCreditInput } from './order-update-without-credit.input';
import { OrderCreateWithoutCreditInput } from './order-create-without-credit.input';

@InputType()
export class OrderUpsertWithoutCreditInput {

    @Field(() => OrderUpdateWithoutCreditInput, {nullable:false})
    update!: OrderUpdateWithoutCreditInput;

    @Field(() => OrderCreateWithoutCreditInput, {nullable:false})
    create!: OrderCreateWithoutCreditInput;
}
