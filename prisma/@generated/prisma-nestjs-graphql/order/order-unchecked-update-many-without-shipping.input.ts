import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutShippingInput } from './order-create-without-shipping.input';
import { OrderCreateOrConnectWithoutShippingInput } from './order-create-or-connect-without-shipping.input';
import { OrderUpsertWithWhereUniqueWithoutShippingInput } from './order-upsert-with-where-unique-without-shipping.input';
import { OrderCreateManyShippingInputEnvelope } from './order-create-many-shipping-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutShippingInput } from './order-update-with-where-unique-without-shipping.input';
import { OrderUpdateManyWithWhereWithoutShippingInput } from './order-update-many-with-where-without-shipping.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUncheckedUpdateManyWithoutShippingInput {

    @Field(() => [OrderCreateWithoutShippingInput], {nullable:true})
    create?: Array<OrderCreateWithoutShippingInput>;

    @Field(() => [OrderCreateOrConnectWithoutShippingInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutShippingInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutShippingInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutShippingInput>;

    @Field(() => OrderCreateManyShippingInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyShippingInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutShippingInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutShippingInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutShippingInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutShippingInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
