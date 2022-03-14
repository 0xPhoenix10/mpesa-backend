import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutVendorWalletInput } from './order-create-without-vendor-wallet.input';
import { OrderCreateOrConnectWithoutVendorWalletInput } from './order-create-or-connect-without-vendor-wallet.input';
import { OrderUpsertWithWhereUniqueWithoutVendorWalletInput } from './order-upsert-with-where-unique-without-vendor-wallet.input';
import { OrderCreateManyVendorWalletInputEnvelope } from './order-create-many-vendor-wallet-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutVendorWalletInput } from './order-update-with-where-unique-without-vendor-wallet.input';
import { OrderUpdateManyWithWhereWithoutVendorWalletInput } from './order-update-many-with-where-without-vendor-wallet.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUncheckedUpdateManyWithoutVendorWalletInput {

    @Field(() => [OrderCreateWithoutVendorWalletInput], {nullable:true})
    create?: Array<OrderCreateWithoutVendorWalletInput>;

    @Field(() => [OrderCreateOrConnectWithoutVendorWalletInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutVendorWalletInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutVendorWalletInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutVendorWalletInput>;

    @Field(() => OrderCreateManyVendorWalletInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyVendorWalletInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutVendorWalletInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutVendorWalletInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutVendorWalletInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutVendorWalletInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
