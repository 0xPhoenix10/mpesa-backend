import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutShippingInput } from './wallet-create-without-shipping.input';

@InputType()
export class WalletCreateOrConnectWithoutShippingInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutShippingInput, {nullable:false})
    create!: WalletCreateWithoutShippingInput;
}
