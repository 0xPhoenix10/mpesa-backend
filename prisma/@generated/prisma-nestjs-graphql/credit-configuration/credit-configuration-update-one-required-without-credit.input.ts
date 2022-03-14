import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutCreditInput } from './credit-configuration-create-without-credit.input';
import { CreditConfigurationCreateOrConnectWithoutCreditInput } from './credit-configuration-create-or-connect-without-credit.input';
import { CreditConfigurationUpsertWithoutCreditInput } from './credit-configuration-upsert-without-credit.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationUpdateWithoutCreditInput } from './credit-configuration-update-without-credit.input';

@InputType()
export class CreditConfigurationUpdateOneRequiredWithoutCreditInput {

    @Field(() => CreditConfigurationCreateWithoutCreditInput, {nullable:true})
    create?: CreditConfigurationCreateWithoutCreditInput;

    @Field(() => CreditConfigurationCreateOrConnectWithoutCreditInput, {nullable:true})
    connectOrCreate?: CreditConfigurationCreateOrConnectWithoutCreditInput;

    @Field(() => CreditConfigurationUpsertWithoutCreditInput, {nullable:true})
    upsert?: CreditConfigurationUpsertWithoutCreditInput;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    connect?: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationUpdateWithoutCreditInput, {nullable:true})
    update?: CreditConfigurationUpdateWithoutCreditInput;
}
