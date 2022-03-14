import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutTrustInput } from './wallet-update-without-trust.input';
import { WalletCreateWithoutTrustInput } from './wallet-create-without-trust.input';

@InputType()
export class WalletUpsertWithoutTrustInput {

    @Field(() => WalletUpdateWithoutTrustInput, {nullable:false})
    update!: WalletUpdateWithoutTrustInput;

    @Field(() => WalletCreateWithoutTrustInput, {nullable:false})
    create!: WalletCreateWithoutTrustInput;
}
