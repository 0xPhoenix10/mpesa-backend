import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutBadgesInput } from './wallet-create-without-badges.input';
import { WalletCreateOrConnectWithoutBadgesInput } from './wallet-create-or-connect-without-badges.input';
import { WalletUpsertWithoutBadgesInput } from './wallet-upsert-without-badges.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutBadgesInput } from './wallet-update-without-badges.input';

@InputType()
export class WalletUpdateOneRequiredWithoutBadgesInput {

    @Field(() => WalletCreateWithoutBadgesInput, {nullable:true})
    create?: WalletCreateWithoutBadgesInput;

    @Field(() => WalletCreateOrConnectWithoutBadgesInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutBadgesInput;

    @Field(() => WalletUpsertWithoutBadgesInput, {nullable:true})
    upsert?: WalletUpsertWithoutBadgesInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutBadgesInput, {nullable:true})
    update?: WalletUpdateWithoutBadgesInput;
}
