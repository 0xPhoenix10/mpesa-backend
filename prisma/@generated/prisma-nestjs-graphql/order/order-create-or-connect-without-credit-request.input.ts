import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutCreditRequestInput } from './order-create-without-credit-request.input';

@InputType()
export class OrderCreateOrConnectWithoutCreditRequestInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutCreditRequestInput, {nullable:false})
    create!: OrderCreateWithoutCreditRequestInput;
}
