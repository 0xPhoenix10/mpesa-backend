import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutVendorWalletInput } from './order-create-without-vendor-wallet.input';

@InputType()
export class OrderCreateOrConnectWithoutVendorWalletInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutVendorWalletInput, {nullable:false})
    create!: OrderCreateWithoutVendorWalletInput;
}
