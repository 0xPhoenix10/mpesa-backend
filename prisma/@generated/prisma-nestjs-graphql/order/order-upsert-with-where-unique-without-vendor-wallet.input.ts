import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutVendorWalletInput } from './order-update-without-vendor-wallet.input';
import { OrderCreateWithoutVendorWalletInput } from './order-create-without-vendor-wallet.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutVendorWalletInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutVendorWalletInput, {nullable:false})
    update!: OrderUpdateWithoutVendorWalletInput;

    @Field(() => OrderCreateWithoutVendorWalletInput, {nullable:false})
    create!: OrderCreateWithoutVendorWalletInput;
}
