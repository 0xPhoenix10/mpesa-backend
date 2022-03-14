import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutBillingInput } from './order-create-without-billing.input';
import { OrderCreateOrConnectWithoutBillingInput } from './order-create-or-connect-without-billing.input';
import { OrderUpsertWithWhereUniqueWithoutBillingInput } from './order-upsert-with-where-unique-without-billing.input';
import { OrderCreateManyBillingInputEnvelope } from './order-create-many-billing-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutBillingInput } from './order-update-with-where-unique-without-billing.input';
import { OrderUpdateManyWithWhereWithoutBillingInput } from './order-update-many-with-where-without-billing.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUncheckedUpdateManyWithoutBillingInput {

    @Field(() => [OrderCreateWithoutBillingInput], {nullable:true})
    create?: Array<OrderCreateWithoutBillingInput>;

    @Field(() => [OrderCreateOrConnectWithoutBillingInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutBillingInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutBillingInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutBillingInput>;

    @Field(() => OrderCreateManyBillingInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyBillingInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutBillingInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutBillingInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutBillingInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutBillingInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
