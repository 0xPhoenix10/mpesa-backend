import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationUpdateManyMutationInput } from './credit-configuration-update-many-mutation.input';
import { CreditConfigurationWhereInput } from './credit-configuration-where.input';

@ArgsType()
export class UpdateManyCreditConfigurationArgs {

    @Field(() => CreditConfigurationUpdateManyMutationInput, {nullable:false})
    data!: CreditConfigurationUpdateManyMutationInput;

    @Field(() => CreditConfigurationWhereInput, {nullable:true})
    where?: CreditConfigurationWhereInput;
}
