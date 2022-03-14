import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutCreditInput } from './order-create-without-credit.input';
import { OrderCreateOrConnectWithoutCreditInput } from './order-create-or-connect-without-credit.input';
import { OrderUpsertWithoutCreditInput } from './order-upsert-without-credit.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutCreditInput } from './order-update-without-credit.input';

@InputType()
export class OrderUpdateOneWithoutCreditInput {

    @Field(() => OrderCreateWithoutCreditInput, {nullable:true})
    create?: OrderCreateWithoutCreditInput;

    @Field(() => OrderCreateOrConnectWithoutCreditInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutCreditInput;

    @Field(() => OrderUpsertWithoutCreditInput, {nullable:true})
    upsert?: OrderUpsertWithoutCreditInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutCreditInput, {nullable:true})
    update?: OrderUpdateWithoutCreditInput;
}
