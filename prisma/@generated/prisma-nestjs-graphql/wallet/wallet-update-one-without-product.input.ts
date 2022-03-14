import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutProductInput } from './wallet-create-without-product.input';
import { WalletCreateOrConnectWithoutProductInput } from './wallet-create-or-connect-without-product.input';
import { WalletUpsertWithoutProductInput } from './wallet-upsert-without-product.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutProductInput } from './wallet-update-without-product.input';

@InputType()
export class WalletUpdateOneWithoutProductInput {

    @Field(() => WalletCreateWithoutProductInput, {nullable:true})
    create?: WalletCreateWithoutProductInput;

    @Field(() => WalletCreateOrConnectWithoutProductInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutProductInput;

    @Field(() => WalletUpsertWithoutProductInput, {nullable:true})
    upsert?: WalletUpsertWithoutProductInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutProductInput, {nullable:true})
    update?: WalletUpdateWithoutProductInput;
}
