import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutAffiliateInput } from './order-create-without-affiliate.input';
import { OrderCreateOrConnectWithoutAffiliateInput } from './order-create-or-connect-without-affiliate.input';
import { OrderUpsertWithWhereUniqueWithoutAffiliateInput } from './order-upsert-with-where-unique-without-affiliate.input';
import { OrderCreateManyAffiliateInputEnvelope } from './order-create-many-affiliate-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutAffiliateInput } from './order-update-with-where-unique-without-affiliate.input';
import { OrderUpdateManyWithWhereWithoutAffiliateInput } from './order-update-many-with-where-without-affiliate.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUpdateManyWithoutAffiliateInput {

    @Field(() => [OrderCreateWithoutAffiliateInput], {nullable:true})
    create?: Array<OrderCreateWithoutAffiliateInput>;

    @Field(() => [OrderCreateOrConnectWithoutAffiliateInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutAffiliateInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutAffiliateInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutAffiliateInput>;

    @Field(() => OrderCreateManyAffiliateInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyAffiliateInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutAffiliateInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutAffiliateInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutAffiliateInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutAffiliateInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
