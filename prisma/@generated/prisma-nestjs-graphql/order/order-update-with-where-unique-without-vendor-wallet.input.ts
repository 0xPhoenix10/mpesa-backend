import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutVendorWalletInput } from './order-update-without-vendor-wallet.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutVendorWalletInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutVendorWalletInput, {nullable:false})
    data!: OrderUpdateWithoutVendorWalletInput;
}
