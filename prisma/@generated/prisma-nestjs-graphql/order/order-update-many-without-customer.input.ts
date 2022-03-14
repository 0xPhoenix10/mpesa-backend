import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutCustomerInput } from './order-create-without-customer.input';
import { OrderCreateOrConnectWithoutCustomerInput } from './order-create-or-connect-without-customer.input';
import { OrderUpsertWithWhereUniqueWithoutCustomerInput } from './order-upsert-with-where-unique-without-customer.input';
import { OrderCreateManyCustomerInputEnvelope } from './order-create-many-customer-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutCustomerInput } from './order-update-with-where-unique-without-customer.input';
import { OrderUpdateManyWithWhereWithoutCustomerInput } from './order-update-many-with-where-without-customer.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUpdateManyWithoutCustomerInput {

    @Field(() => [OrderCreateWithoutCustomerInput], {nullable:true})
    create?: Array<OrderCreateWithoutCustomerInput>;

    @Field(() => [OrderCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutCustomerInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => OrderCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyCustomerInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
