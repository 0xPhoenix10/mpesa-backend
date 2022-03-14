import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingCreateWithoutWalletInput } from './shipping-create-without-wallet.input';
import { ShippingCreateOrConnectWithoutWalletInput } from './shipping-create-or-connect-without-wallet.input';
import { ShippingUpsertWithWhereUniqueWithoutWalletInput } from './shipping-upsert-with-where-unique-without-wallet.input';
import { ShippingCreateManyWalletInputEnvelope } from './shipping-create-many-wallet-input-envelope.input';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { ShippingUpdateWithWhereUniqueWithoutWalletInput } from './shipping-update-with-where-unique-without-wallet.input';
import { ShippingUpdateManyWithWhereWithoutWalletInput } from './shipping-update-many-with-where-without-wallet.input';
import { ShippingScalarWhereInput } from './shipping-scalar-where.input';

@InputType()
export class ShippingUpdateManyWithoutWalletInput {

    @Field(() => [ShippingCreateWithoutWalletInput], {nullable:true})
    create?: Array<ShippingCreateWithoutWalletInput>;

    @Field(() => [ShippingCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<ShippingCreateOrConnectWithoutWalletInput>;

    @Field(() => [ShippingUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    upsert?: Array<ShippingUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => ShippingCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: ShippingCreateManyWalletInputEnvelope;

    @Field(() => [ShippingWhereUniqueInput], {nullable:true})
    set?: Array<ShippingWhereUniqueInput>;

    @Field(() => [ShippingWhereUniqueInput], {nullable:true})
    disconnect?: Array<ShippingWhereUniqueInput>;

    @Field(() => [ShippingWhereUniqueInput], {nullable:true})
    delete?: Array<ShippingWhereUniqueInput>;

    @Field(() => [ShippingWhereUniqueInput], {nullable:true})
    connect?: Array<ShippingWhereUniqueInput>;

    @Field(() => [ShippingUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    update?: Array<ShippingUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [ShippingUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    updateMany?: Array<ShippingUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [ShippingScalarWhereInput], {nullable:true})
    deleteMany?: Array<ShippingScalarWhereInput>;
}
