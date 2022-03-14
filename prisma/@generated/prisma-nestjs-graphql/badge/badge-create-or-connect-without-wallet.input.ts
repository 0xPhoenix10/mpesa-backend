import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';
import { BadgeCreateWithoutWalletInput } from './badge-create-without-wallet.input';

@InputType()
export class BadgeCreateOrConnectWithoutWalletInput {

    @Field(() => BadgeWhereUniqueInput, {nullable:false})
    where!: BadgeWhereUniqueInput;

    @Field(() => BadgeCreateWithoutWalletInput, {nullable:false})
    create!: BadgeCreateWithoutWalletInput;
}
