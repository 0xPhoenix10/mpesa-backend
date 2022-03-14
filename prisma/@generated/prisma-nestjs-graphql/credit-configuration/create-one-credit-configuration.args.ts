import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationCreateInput } from './credit-configuration-create.input';

@ArgsType()
export class CreateOneCreditConfigurationArgs {

    @Field(() => CreditConfigurationCreateInput, {nullable:false})
    data!: CreditConfigurationCreateInput;
}
