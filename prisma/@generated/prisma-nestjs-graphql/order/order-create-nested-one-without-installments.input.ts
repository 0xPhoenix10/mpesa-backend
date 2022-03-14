import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutInstallmentsInput } from './order-create-without-installments.input';
import { OrderCreateOrConnectWithoutInstallmentsInput } from './order-create-or-connect-without-installments.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutInstallmentsInput {

    @Field(() => OrderCreateWithoutInstallmentsInput, {nullable:true})
    create?: OrderCreateWithoutInstallmentsInput;

    @Field(() => OrderCreateOrConnectWithoutInstallmentsInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutInstallmentsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;
}
