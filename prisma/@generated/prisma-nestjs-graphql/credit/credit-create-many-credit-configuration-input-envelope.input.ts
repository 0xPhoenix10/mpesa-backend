import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateManyCreditConfigurationInput } from './credit-create-many-credit-configuration.input';

@InputType()
export class CreditCreateManyCreditConfigurationInputEnvelope {

    @Field(() => [CreditCreateManyCreditConfigurationInput], {nullable:false})
    data!: Array<CreditCreateManyCreditConfigurationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
