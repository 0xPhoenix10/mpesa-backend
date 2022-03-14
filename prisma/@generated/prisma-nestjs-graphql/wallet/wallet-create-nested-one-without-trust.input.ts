import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutTrustInput } from './wallet-create-without-trust.input';
import { WalletCreateOrConnectWithoutTrustInput } from './wallet-create-or-connect-without-trust.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutTrustInput {

    @Field(() => WalletCreateWithoutTrustInput, {nullable:true})
    create?: WalletCreateWithoutTrustInput;

    @Field(() => WalletCreateOrConnectWithoutTrustInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutTrustInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
