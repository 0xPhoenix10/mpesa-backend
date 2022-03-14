import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutBadgesInput } from './wallet-create-without-badges.input';
import { WalletCreateOrConnectWithoutBadgesInput } from './wallet-create-or-connect-without-badges.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutBadgesInput {

    @Field(() => WalletCreateWithoutBadgesInput, {nullable:true})
    create?: WalletCreateWithoutBadgesInput;

    @Field(() => WalletCreateOrConnectWithoutBadgesInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutBadgesInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
