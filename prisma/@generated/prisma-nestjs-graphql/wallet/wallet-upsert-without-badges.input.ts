import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutBadgesInput } from './wallet-update-without-badges.input';
import { WalletCreateWithoutBadgesInput } from './wallet-create-without-badges.input';

@InputType()
export class WalletUpsertWithoutBadgesInput {

    @Field(() => WalletUpdateWithoutBadgesInput, {nullable:false})
    update!: WalletUpdateWithoutBadgesInput;

    @Field(() => WalletCreateWithoutBadgesInput, {nullable:false})
    create!: WalletCreateWithoutBadgesInput;
}
