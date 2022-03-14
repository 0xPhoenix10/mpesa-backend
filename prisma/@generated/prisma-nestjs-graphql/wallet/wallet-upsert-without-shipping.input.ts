import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutShippingInput } from './wallet-update-without-shipping.input';
import { WalletCreateWithoutShippingInput } from './wallet-create-without-shipping.input';

@InputType()
export class WalletUpsertWithoutShippingInput {

    @Field(() => WalletUpdateWithoutShippingInput, {nullable:false})
    update!: WalletUpdateWithoutShippingInput;

    @Field(() => WalletCreateWithoutShippingInput, {nullable:false})
    create!: WalletCreateWithoutShippingInput;
}
