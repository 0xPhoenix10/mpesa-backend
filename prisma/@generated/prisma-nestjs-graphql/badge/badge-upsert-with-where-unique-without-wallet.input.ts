import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';
import { BadgeUpdateWithoutWalletInput } from './badge-update-without-wallet.input';
import { BadgeCreateWithoutWalletInput } from './badge-create-without-wallet.input';

@InputType()
export class BadgeUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => BadgeWhereUniqueInput, {nullable:false})
    where!: BadgeWhereUniqueInput;

    @Field(() => BadgeUpdateWithoutWalletInput, {nullable:false})
    update!: BadgeUpdateWithoutWalletInput;

    @Field(() => BadgeCreateWithoutWalletInput, {nullable:false})
    create!: BadgeCreateWithoutWalletInput;
}
