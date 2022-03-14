import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutCreditRequestInput } from './order-create-without-credit-request.input';
import { OrderCreateOrConnectWithoutCreditRequestInput } from './order-create-or-connect-without-credit-request.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutCreditRequestInput {

    @Field(() => OrderCreateWithoutCreditRequestInput, {nullable:true})
    create?: OrderCreateWithoutCreditRequestInput;

    @Field(() => OrderCreateOrConnectWithoutCreditRequestInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutCreditRequestInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;
}
