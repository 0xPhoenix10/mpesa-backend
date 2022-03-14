import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutProductInput } from './wallet-update-without-product.input';
import { WalletCreateWithoutProductInput } from './wallet-create-without-product.input';

@InputType()
export class WalletUpsertWithoutProductInput {

    @Field(() => WalletUpdateWithoutProductInput, {nullable:false})
    update!: WalletUpdateWithoutProductInput;

    @Field(() => WalletCreateWithoutProductInput, {nullable:false})
    create!: WalletCreateWithoutProductInput;
}
