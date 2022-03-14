import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutTrustInput } from './wallet-create-without-trust.input';
import { WalletCreateOrConnectWithoutTrustInput } from './wallet-create-or-connect-without-trust.input';
import { WalletUpsertWithoutTrustInput } from './wallet-upsert-without-trust.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutTrustInput } from './wallet-update-without-trust.input';

@InputType()
export class WalletUpdateOneWithoutTrustInput {

    @Field(() => WalletCreateWithoutTrustInput, {nullable:true})
    create?: WalletCreateWithoutTrustInput;

    @Field(() => WalletCreateOrConnectWithoutTrustInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutTrustInput;

    @Field(() => WalletUpsertWithoutTrustInput, {nullable:true})
    upsert?: WalletUpsertWithoutTrustInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutTrustInput, {nullable:true})
    update?: WalletUpdateWithoutTrustInput;
}
