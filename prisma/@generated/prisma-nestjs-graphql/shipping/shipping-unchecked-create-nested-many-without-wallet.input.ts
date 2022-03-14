import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingCreateWithoutWalletInput } from './shipping-create-without-wallet.input';
import { ShippingCreateOrConnectWithoutWalletInput } from './shipping-create-or-connect-without-wallet.input';
import { ShippingCreateManyWalletInputEnvelope } from './shipping-create-many-wallet-input-envelope.input';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';

@InputType()
export class ShippingUncheckedCreateNestedManyWithoutWalletInput {

    @Field(() => [ShippingCreateWithoutWalletInput], {nullable:true})
    create?: Array<ShippingCreateWithoutWalletInput>;

    @Field(() => [ShippingCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<ShippingCreateOrConnectWithoutWalletInput>;

    @Field(() => ShippingCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: ShippingCreateManyWalletInputEnvelope;

    @Field(() => [ShippingWhereUniqueInput], {nullable:true})
    connect?: Array<ShippingWhereUniqueInput>;
}
