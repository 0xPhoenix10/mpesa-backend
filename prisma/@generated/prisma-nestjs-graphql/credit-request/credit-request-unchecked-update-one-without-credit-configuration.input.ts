import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestCreateWithoutCreditConfigurationInput } from './credit-request-create-without-credit-configuration.input';
import { CreditRequestCreateOrConnectWithoutCreditConfigurationInput } from './credit-request-create-or-connect-without-credit-configuration.input';
import { CreditRequestUpsertWithoutCreditConfigurationInput } from './credit-request-upsert-without-credit-configuration.input';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';
import { CreditRequestUpdateWithoutCreditConfigurationInput } from './credit-request-update-without-credit-configuration.input';

@InputType()
export class CreditRequestUncheckedUpdateOneWithoutCreditConfigurationInput {

    @Field(() => CreditRequestCreateWithoutCreditConfigurationInput, {nullable:true})
    create?: CreditRequestCreateWithoutCreditConfigurationInput;

    @Field(() => CreditRequestCreateOrConnectWithoutCreditConfigurationInput, {nullable:true})
    connectOrCreate?: CreditRequestCreateOrConnectWithoutCreditConfigurationInput;

    @Field(() => CreditRequestUpsertWithoutCreditConfigurationInput, {nullable:true})
    upsert?: CreditRequestUpsertWithoutCreditConfigurationInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CreditRequestWhereUniqueInput, {nullable:true})
    connect?: CreditRequestWhereUniqueInput;

    @Field(() => CreditRequestUpdateWithoutCreditConfigurationInput, {nullable:true})
    update?: CreditRequestUpdateWithoutCreditConfigurationInput;
}
