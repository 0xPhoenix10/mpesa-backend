import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingCreateManyWalletInput } from './billing-create-many-wallet.input';

@InputType()
export class BillingCreateManyWalletInputEnvelope {

    @Field(() => [BillingCreateManyWalletInput], {nullable:false})
    data!: Array<BillingCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
