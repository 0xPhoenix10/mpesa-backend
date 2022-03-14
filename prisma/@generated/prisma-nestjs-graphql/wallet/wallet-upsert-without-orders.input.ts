import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutOrdersInput } from './wallet-update-without-orders.input';
import { WalletCreateWithoutOrdersInput } from './wallet-create-without-orders.input';

@InputType()
export class WalletUpsertWithoutOrdersInput {

    @Field(() => WalletUpdateWithoutOrdersInput, {nullable:false})
    update!: WalletUpdateWithoutOrdersInput;

    @Field(() => WalletCreateWithoutOrdersInput, {nullable:false})
    create!: WalletCreateWithoutOrdersInput;
}
