import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateManyCreditConfigurationInput } from './installment-create-many-credit-configuration.input';

@InputType()
export class InstallmentCreateManyCreditConfigurationInputEnvelope {

    @Field(() => [InstallmentCreateManyCreditConfigurationInput], {nullable:false})
    data!: Array<InstallmentCreateManyCreditConfigurationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
