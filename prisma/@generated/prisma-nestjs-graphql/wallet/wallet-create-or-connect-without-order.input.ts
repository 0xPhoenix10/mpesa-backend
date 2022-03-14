import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutOrderInput } from './wallet-create-without-order.input';

@InputType()
export class WalletCreateOrConnectWithoutOrderInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutOrderInput, {nullable:false})
    create!: WalletCreateWithoutOrderInput;
}
