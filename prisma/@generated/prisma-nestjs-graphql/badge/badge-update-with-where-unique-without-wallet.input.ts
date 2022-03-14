import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';
import { BadgeUpdateWithoutWalletInput } from './badge-update-without-wallet.input';

@InputType()
export class BadgeUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => BadgeWhereUniqueInput, {nullable:false})
    where!: BadgeWhereUniqueInput;

    @Field(() => BadgeUpdateWithoutWalletInput, {nullable:false})
    data!: BadgeUpdateWithoutWalletInput;
}
