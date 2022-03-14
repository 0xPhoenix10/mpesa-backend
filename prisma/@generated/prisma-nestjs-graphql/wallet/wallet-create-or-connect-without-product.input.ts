import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutProductInput } from './wallet-create-without-product.input';

@InputType()
export class WalletCreateOrConnectWithoutProductInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutProductInput, {nullable:false})
    create!: WalletCreateWithoutProductInput;
}
