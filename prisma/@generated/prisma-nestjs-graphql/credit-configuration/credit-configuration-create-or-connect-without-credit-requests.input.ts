import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationCreateWithoutCreditRequestsInput } from './credit-configuration-create-without-credit-requests.input';

@InputType()
export class CreditConfigurationCreateOrConnectWithoutCreditRequestsInput {

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationCreateWithoutCreditRequestsInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutCreditRequestsInput;
}
