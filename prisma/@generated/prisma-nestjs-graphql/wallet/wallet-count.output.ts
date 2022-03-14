import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WalletCount {

    @Field(() => Int, {nullable:false})
    answers?: number;

    @Field(() => Int, {nullable:false})
    badges?: number;

    @Field(() => Int, {nullable:false})
    billing?: number;

    @Field(() => Int, {nullable:false})
    creditorCredit?: number;

    @Field(() => Int, {nullable:false})
    debtorCredit?: number;

    @Field(() => Int, {nullable:false})
    creditConfigurations?: number;

    @Field(() => Int, {nullable:false})
    customer?: number;

    @Field(() => Int, {nullable:false})
    vendor?: number;

    @Field(() => Int, {nullable:false})
    creditorInstallments?: number;

    @Field(() => Int, {nullable:false})
    debtorInstallments?: number;

    @Field(() => Int, {nullable:false})
    order?: number;

    @Field(() => Int, {nullable:false})
    orders?: number;

    @Field(() => Int, {nullable:false})
    product?: number;

    @Field(() => Int, {nullable:false})
    settlement?: number;

    @Field(() => Int, {nullable:false})
    shipping?: number;

    @Field(() => Int, {nullable:false})
    supplier?: number;

    @Field(() => Int, {nullable:false})
    vendorSupplier?: number;

    @Field(() => Int, {nullable:false})
    transaction?: number;

    @Field(() => Int, {nullable:false})
    usersWallets?: number;

    @Field(() => Int, {nullable:false})
    visit?: number;

    @Field(() => Int, {nullable:false})
    users?: number;
}
