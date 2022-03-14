import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutCreditRequestsInput } from './credit-configuration-create-without-credit-requests.input';
import { CreditConfigurationCreateOrConnectWithoutCreditRequestsInput } from './credit-configuration-create-or-connect-without-credit-requests.input';
import { CreditConfigurationUpsertWithoutCreditRequestsInput } from './credit-configuration-upsert-without-credit-requests.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationUpdateWithoutCreditRequestsInput } from './credit-configuration-update-without-credit-requests.input';

@InputType()
export class CreditConfigurationUpdateOneWithoutCreditRequestsInput {

    @Field(() => CreditConfigurationCreateWithoutCreditRequestsInput, {nullable:true})
    create?: CreditConfigurationCreateWithoutCreditRequestsInput;

    @Field(() => CreditConfigurationCreateOrConnectWithoutCreditRequestsInput, {nullable:true})
    connectOrCreate?: CreditConfigurationCreateOrConnectWithoutCreditRequestsInput;

    @Field(() => CreditConfigurationUpsertWithoutCreditRequestsInput, {nullable:true})
    upsert?: CreditConfigurationUpsertWithoutCreditRequestsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    connect?: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationUpdateWithoutCreditRequestsInput, {nullable:true})
    update?: CreditConfigurationUpdateWithoutCreditRequestsInput;
}
