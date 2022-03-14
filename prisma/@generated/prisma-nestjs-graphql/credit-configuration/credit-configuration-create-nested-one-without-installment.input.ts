import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutInstallmentInput } from './credit-configuration-create-without-installment.input';
import { CreditConfigurationCreateOrConnectWithoutInstallmentInput } from './credit-configuration-create-or-connect-without-installment.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';

@InputType()
export class CreditConfigurationCreateNestedOneWithoutInstallmentInput {

    @Field(() => CreditConfigurationCreateWithoutInstallmentInput, {nullable:true})
    create?: CreditConfigurationCreateWithoutInstallmentInput;

    @Field(() => CreditConfigurationCreateOrConnectWithoutInstallmentInput, {nullable:true})
    connectOrCreate?: CreditConfigurationCreateOrConnectWithoutInstallmentInput;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    connect?: CreditConfigurationWhereUniqueInput;
}
