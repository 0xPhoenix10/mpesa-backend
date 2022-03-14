import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    activity?: number;

    @Field(() => Int, {nullable:false})
    answers?: number;

    @Field(() => Int, {nullable:false})
    creditsAffilate?: number;

    @Field(() => Int, {nullable:false})
    credits?: number;

    @Field(() => Int, {nullable:false})
    installment?: number;

    @Field(() => Int, {nullable:false})
    login?: number;

    @Field(() => Int, {nullable:false})
    ordersAffiliate?: number;

    @Field(() => Int, {nullable:false})
    orders?: number;

    @Field(() => Int, {nullable:false})
    otherMemberKYC?: number;

    @Field(() => Int, {nullable:false})
    product?: number;

    @Field(() => Int, {nullable:false})
    settlement?: number;

    @Field(() => Int, {nullable:false})
    usersWallets?: number;

    @Field(() => Int, {nullable:false})
    verify?: number;

    @Field(() => Int, {nullable:false})
    visit?: number;

    @Field(() => Int, {nullable:false})
    wallets?: number;

    @Field(() => Int, {nullable:false})
    Settlement?: number;
}
