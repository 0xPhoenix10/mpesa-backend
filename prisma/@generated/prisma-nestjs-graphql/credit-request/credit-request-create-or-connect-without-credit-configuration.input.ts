import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';
import { CreditRequestCreateWithoutCreditConfigurationInput } from './credit-request-create-without-credit-configuration.input';

@InputType()
export class CreditRequestCreateOrConnectWithoutCreditConfigurationInput {

    @Field(() => CreditRequestWhereUniqueInput, {nullable:false})
    where!: CreditRequestWhereUniqueInput;

    @Field(() => CreditRequestCreateWithoutCreditConfigurationInput, {nullable:false})
    create!: CreditRequestCreateWithoutCreditConfigurationInput;
}
