import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrustCreateWithoutWalletInput } from './trust-create-without-wallet.input';
import { TrustCreateOrConnectWithoutWalletInput } from './trust-create-or-connect-without-wallet.input';
import { TrustUpsertWithoutWalletInput } from './trust-upsert-without-wallet.input';
import { TrustWhereUniqueInput } from './trust-where-unique.input';
import { TrustUpdateWithoutWalletInput } from './trust-update-without-wallet.input';

@InputType()
export class TrustUpdateOneWithoutWalletInput {

    @Field(() => TrustCreateWithoutWalletInput, {nullable:true})
    create?: TrustCreateWithoutWalletInput;

    @Field(() => TrustCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: TrustCreateOrConnectWithoutWalletInput;

    @Field(() => TrustUpsertWithoutWalletInput, {nullable:true})
    upsert?: TrustUpsertWithoutWalletInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TrustWhereUniqueInput, {nullable:true})
    connect?: TrustWhereUniqueInput;

    @Field(() => TrustUpdateWithoutWalletInput, {nullable:true})
    update?: TrustUpdateWithoutWalletInput;
}
