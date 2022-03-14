import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestCreateWithoutCreditConfigurationInput } from './credit-request-create-without-credit-configuration.input';
import { CreditRequestCreateOrConnectWithoutCreditConfigurationInput } from './credit-request-create-or-connect-without-credit-configuration.input';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';

@InputType()
export class CreditRequestUncheckedCreateNestedOneWithoutCreditConfigurationInput {

    @Field(() => CreditRequestCreateWithoutCreditConfigurationInput, {nullable:true})
    create?: CreditRequestCreateWithoutCreditConfigurationInput;

    @Field(() => CreditRequestCreateOrConnectWithoutCreditConfigurationInput, {nullable:true})
    connectOrCreate?: CreditRequestCreateOrConnectWithoutCreditConfigurationInput;

    @Field(() => CreditRequestWhereUniqueInput, {nullable:true})
    connect?: CreditRequestWhereUniqueInput;
}
