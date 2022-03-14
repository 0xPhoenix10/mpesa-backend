import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutProductInput } from './wallet-create-without-product.input';
import { WalletCreateOrConnectWithoutProductInput } from './wallet-create-or-connect-without-product.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutProductInput {

    @Field(() => WalletCreateWithoutProductInput, {nullable:true})
    create?: WalletCreateWithoutProductInput;

    @Field(() => WalletCreateOrConnectWithoutProductInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutProductInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
