import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';

@ArgsType()
export class DeleteOneCreditConfigurationArgs {

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;
}
