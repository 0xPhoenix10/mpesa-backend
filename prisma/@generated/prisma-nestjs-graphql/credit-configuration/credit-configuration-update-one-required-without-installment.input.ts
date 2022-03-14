import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutInstallmentInput } from './credit-configuration-create-without-installment.input';
import { CreditConfigurationCreateOrConnectWithoutInstallmentInput } from './credit-configuration-create-or-connect-without-installment.input';
import { CreditConfigurationUpsertWithoutInstallmentInput } from './credit-configuration-upsert-without-installment.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationUpdateWithoutInstallmentInput } from './credit-configuration-update-without-installment.input';

@InputType()
export class CreditConfigurationUpdateOneRequiredWithoutInstallmentInput {

    @Field(() => CreditConfigurationCreateWithoutInstallmentInput, {nullable:true})
    create?: CreditConfigurationCreateWithoutInstallmentInput;

    @Field(() => CreditConfigurationCreateOrConnectWithoutInstallmentInput, {nullable:true})
    connectOrCreate?: CreditConfigurationCreateOrConnectWithoutInstallmentInput;

    @Field(() => CreditConfigurationUpsertWithoutInstallmentInput, {nullable:true})
    upsert?: CreditConfigurationUpsertWithoutInstallmentInput;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    connect?: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationUpdateWithoutInstallmentInput, {nullable:true})
    update?: CreditConfigurationUpdateWithoutInstallmentInput;
}
