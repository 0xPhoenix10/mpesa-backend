import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrustWhereUniqueInput } from './trust-where-unique.input';
import { TrustCreateWithoutWalletInput } from './trust-create-without-wallet.input';

@InputType()
export class TrustCreateOrConnectWithoutWalletInput {

    @Field(() => TrustWhereUniqueInput, {nullable:false})
    where!: TrustWhereUniqueInput;

    @Field(() => TrustCreateWithoutWalletInput, {nullable:false})
    create!: TrustCreateWithoutWalletInput;
}
