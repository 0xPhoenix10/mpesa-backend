import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrustCreateWithoutWalletInput } from './trust-create-without-wallet.input';
import { TrustCreateOrConnectWithoutWalletInput } from './trust-create-or-connect-without-wallet.input';
import { TrustWhereUniqueInput } from './trust-where-unique.input';

@InputType()
export class TrustUncheckedCreateNestedOneWithoutWalletInput {

    @Field(() => TrustCreateWithoutWalletInput, {nullable:true})
    create?: TrustCreateWithoutWalletInput;

    @Field(() => TrustCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: TrustCreateOrConnectWithoutWalletInput;

    @Field(() => TrustWhereUniqueInput, {nullable:true})
    connect?: TrustWhereUniqueInput;
}
