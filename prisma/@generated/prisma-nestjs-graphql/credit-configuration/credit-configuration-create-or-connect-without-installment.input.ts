import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationCreateWithoutInstallmentInput } from './credit-configuration-create-without-installment.input';

@InputType()
export class CreditConfigurationCreateOrConnectWithoutInstallmentInput {

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationCreateWithoutInstallmentInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutInstallmentInput;
}
