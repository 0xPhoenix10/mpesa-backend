import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutBadgesInput } from './wallet-create-without-badges.input';

@InputType()
export class WalletCreateOrConnectWithoutBadgesInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutBadgesInput, {nullable:false})
    create!: WalletCreateWithoutBadgesInput;
}
