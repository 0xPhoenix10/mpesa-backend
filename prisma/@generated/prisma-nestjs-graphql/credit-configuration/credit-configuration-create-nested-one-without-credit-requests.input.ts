import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutCreditRequestsInput } from './credit-configuration-create-without-credit-requests.input';
import { CreditConfigurationCreateOrConnectWithoutCreditRequestsInput } from './credit-configuration-create-or-connect-without-credit-requests.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';

@InputType()
export class CreditConfigurationCreateNestedOneWithoutCreditRequestsInput {

    @Field(() => CreditConfigurationCreateWithoutCreditRequestsInput, {nullable:true})
    create?: CreditConfigurationCreateWithoutCreditRequestsInput;

    @Field(() => CreditConfigurationCreateOrConnectWithoutCreditRequestsInput, {nullable:true})
    connectOrCreate?: CreditConfigurationCreateOrConnectWithoutCreditRequestsInput;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    connect?: CreditConfigurationWhereUniqueInput;
}
