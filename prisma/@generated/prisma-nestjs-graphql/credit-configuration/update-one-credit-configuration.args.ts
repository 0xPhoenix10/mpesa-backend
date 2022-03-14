import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationUpdateInput } from './credit-configuration-update.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';

@ArgsType()
export class UpdateOneCreditConfigurationArgs {

    @Field(() => CreditConfigurationUpdateInput, {nullable:false})
    data!: CreditConfigurationUpdateInput;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;
}
