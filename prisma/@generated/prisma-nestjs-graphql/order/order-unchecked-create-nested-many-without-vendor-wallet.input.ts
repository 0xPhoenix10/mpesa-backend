import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutVendorWalletInput } from './order-create-without-vendor-wallet.input';
import { OrderCreateOrConnectWithoutVendorWalletInput } from './order-create-or-connect-without-vendor-wallet.input';
import { OrderCreateManyVendorWalletInputEnvelope } from './order-create-many-vendor-wallet-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedManyWithoutVendorWalletInput {

    @Field(() => [OrderCreateWithoutVendorWalletInput], {nullable:true})
    create?: Array<OrderCreateWithoutVendorWalletInput>;

    @Field(() => [OrderCreateOrConnectWithoutVendorWalletInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutVendorWalletInput>;

    @Field(() => OrderCreateManyVendorWalletInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyVendorWalletInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}
