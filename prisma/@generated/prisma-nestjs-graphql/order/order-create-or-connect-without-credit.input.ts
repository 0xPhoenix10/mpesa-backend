import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutCreditInput } from './order-create-without-credit.input';

@InputType()
export class OrderCreateOrConnectWithoutCreditInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutCreditInput, {nullable:false})
    create!: OrderCreateWithoutCreditInput;
}
