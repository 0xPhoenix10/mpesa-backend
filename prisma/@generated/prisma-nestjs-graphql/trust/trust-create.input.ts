import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutTrustInput } from '../wallet/wallet-create-nested-one-without-trust.input';

@InputType()
export class TrustCreateInput {

    @Field(() => Float, {nullable:true})
    trustRating?: number;

    @Field(() => Float, {nullable:true})
    score?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => WalletCreateNestedOneWithoutTrustInput, {nullable:true})
    Wallet?: WalletCreateNestedOneWithoutTrustInput;
}
