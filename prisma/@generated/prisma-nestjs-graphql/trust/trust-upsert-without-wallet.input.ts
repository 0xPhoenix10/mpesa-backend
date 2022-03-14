import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrustUpdateWithoutWalletInput } from './trust-update-without-wallet.input';
import { TrustCreateWithoutWalletInput } from './trust-create-without-wallet.input';

@InputType()
export class TrustUpsertWithoutWalletInput {

    @Field(() => TrustUpdateWithoutWalletInput, {nullable:false})
    update!: TrustUpdateWithoutWalletInput;

    @Field(() => TrustCreateWithoutWalletInput, {nullable:false})
    create!: TrustCreateWithoutWalletInput;
}
