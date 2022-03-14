import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutInstallmentsInput } from './order-create-without-installments.input';

@InputType()
export class OrderCreateOrConnectWithoutInstallmentsInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutInstallmentsInput, {nullable:false})
    create!: OrderCreateWithoutInstallmentsInput;
}
