import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class TrustUncheckedCreateWithoutWalletInput {

    @Field(() => Float, {nullable:true})
    trustRating?: number;

    @Field(() => Float, {nullable:true})
    score?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
