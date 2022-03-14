import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';
import { Order } from '../order/order.model';
import { BillingCount } from './billing-count.output';

@ObjectType()
export class Billing {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => String, {nullable:true})
    company!: string | null;

    @Field(() => String, {nullable:true})
    address1!: string | null;

    @Field(() => String, {nullable:true})
    address2!: string | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => String, {nullable:true})
    state!: string | null;

    @Field(() => String, {nullable:true})
    postcode!: string | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => String, {nullable:true})
    walletId!: string | null;

    @Field(() => Wallet, {nullable:true})
    wallet?: Wallet | null;

    @Field(() => [Order], {nullable:true})
    order?: Array<Order>;

    @Field(() => BillingCount, {nullable:false})
    _count?: BillingCount;
}
