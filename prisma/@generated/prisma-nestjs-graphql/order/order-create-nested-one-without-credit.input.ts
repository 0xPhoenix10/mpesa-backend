import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutCreditInput } from './order-create-without-credit.input';
import { OrderCreateOrConnectWithoutCreditInput } from './order-create-or-connect-without-credit.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutCreditInput {

    @Field(() => OrderCreateWithoutCreditInput, {nullable:true})
    create?: OrderCreateWithoutCreditInput;

    @Field(() => OrderCreateOrConnectWithoutCreditInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutCreditInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;
}
