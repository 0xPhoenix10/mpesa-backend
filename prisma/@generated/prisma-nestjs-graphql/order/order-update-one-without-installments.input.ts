import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutInstallmentsInput } from './order-create-without-installments.input';
import { OrderCreateOrConnectWithoutInstallmentsInput } from './order-create-or-connect-without-installments.input';
import { OrderUpsertWithoutInstallmentsInput } from './order-upsert-without-installments.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutInstallmentsInput } from './order-update-without-installments.input';

@InputType()
export class OrderUpdateOneWithoutInstallmentsInput {

    @Field(() => OrderCreateWithoutInstallmentsInput, {nullable:true})
    create?: OrderCreateWithoutInstallmentsInput;

    @Field(() => OrderCreateOrConnectWithoutInstallmentsInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutInstallmentsInput;

    @Field(() => OrderUpsertWithoutInstallmentsInput, {nullable:true})
    upsert?: OrderUpsertWithoutInstallmentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutInstallmentsInput, {nullable:true})
    update?: OrderUpdateWithoutInstallmentsInput;
}
