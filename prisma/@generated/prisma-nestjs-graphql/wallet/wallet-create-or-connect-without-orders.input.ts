import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutOrdersInput } from './wallet-create-without-orders.input';

@InputType()
export class WalletCreateOrConnectWithoutOrdersInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutOrdersInput, {nullable:false})
    create!: WalletCreateWithoutOrdersInput;
}
