import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';

@ObjectType()
export class Customer {

    @Field(() => String, {nullable:false})
    customerId!: string;

    @Field(() => String, {nullable:false})
    vendorId!: string;

    @Field(() => Wallet, {nullable:false})
    customer?: Wallet;

    @Field(() => Wallet, {nullable:false})
    vendor?: Wallet;
}
