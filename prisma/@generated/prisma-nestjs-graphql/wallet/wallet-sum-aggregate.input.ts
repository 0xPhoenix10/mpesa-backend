import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WalletSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    balance?: true;
}
