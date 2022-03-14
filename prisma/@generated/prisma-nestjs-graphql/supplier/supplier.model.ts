import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';

@ObjectType()
export class Supplier {

    @Field(() => String, {nullable:false})
    supplierId!: string;

    @Field(() => String, {nullable:false})
    vendorId!: string;

    @Field(() => Wallet, {nullable:false})
    supplier?: Wallet;

    @Field(() => Wallet, {nullable:false})
    vendor?: Wallet;
}
