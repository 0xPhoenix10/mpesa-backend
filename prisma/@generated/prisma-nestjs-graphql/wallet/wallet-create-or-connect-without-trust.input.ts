import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutTrustInput } from './wallet-create-without-trust.input';

@InputType()
export class WalletCreateOrConnectWithoutTrustInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutTrustInput, {nullable:false})
    create!: WalletCreateWithoutTrustInput;
}
