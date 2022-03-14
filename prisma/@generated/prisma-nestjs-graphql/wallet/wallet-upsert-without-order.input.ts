import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutOrderInput } from './wallet-update-without-order.input';
import { WalletCreateWithoutOrderInput } from './wallet-create-without-order.input';

@InputType()
export class WalletUpsertWithoutOrderInput {

    @Field(() => WalletUpdateWithoutOrderInput, {nullable:false})
    update!: WalletUpdateWithoutOrderInput;

    @Field(() => WalletCreateWithoutOrderInput, {nullable:false})
    create!: WalletCreateWithoutOrderInput;
}
