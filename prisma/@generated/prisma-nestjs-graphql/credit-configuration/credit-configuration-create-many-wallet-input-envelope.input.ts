import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateManyWalletInput } from './credit-configuration-create-many-wallet.input';

@InputType()
export class CreditConfigurationCreateManyWalletInputEnvelope {

    @Field(() => [CreditConfigurationCreateManyWalletInput], {nullable:false})
    data!: Array<CreditConfigurationCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
