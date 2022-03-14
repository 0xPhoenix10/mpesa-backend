import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutCreditRequestInput } from './order-create-without-credit-request.input';
import { OrderCreateOrConnectWithoutCreditRequestInput } from './order-create-or-connect-without-credit-request.input';
import { OrderUpsertWithoutCreditRequestInput } from './order-upsert-without-credit-request.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutCreditRequestInput } from './order-update-without-credit-request.input';

@InputType()
export class OrderUpdateOneWithoutCreditRequestInput {

    @Field(() => OrderCreateWithoutCreditRequestInput, {nullable:true})
    create?: OrderCreateWithoutCreditRequestInput;

    @Field(() => OrderCreateOrConnectWithoutCreditRequestInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutCreditRequestInput;

    @Field(() => OrderUpsertWithoutCreditRequestInput, {nullable:true})
    upsert?: OrderUpsertWithoutCreditRequestInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutCreditRequestInput, {nullable:true})
    update?: OrderUpdateWithoutCreditRequestInput;
}
