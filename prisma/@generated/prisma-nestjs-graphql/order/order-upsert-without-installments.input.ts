import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutInstallmentsInput } from './order-update-without-installments.input';
import { OrderCreateWithoutInstallmentsInput } from './order-create-without-installments.input';

@InputType()
export class OrderUpsertWithoutInstallmentsInput {

    @Field(() => OrderUpdateWithoutInstallmentsInput, {nullable:false})
    update!: OrderUpdateWithoutInstallmentsInput;

    @Field(() => OrderCreateWithoutInstallmentsInput, {nullable:false})
    create!: OrderCreateWithoutInstallmentsInput;
}
