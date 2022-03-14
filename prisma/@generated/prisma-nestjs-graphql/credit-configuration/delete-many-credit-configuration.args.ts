import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationWhereInput } from './credit-configuration-where.input';

@ArgsType()
export class DeleteManyCreditConfigurationArgs {

    @Field(() => CreditConfigurationWhereInput, {nullable:true})
    where?: CreditConfigurationWhereInput;
}
