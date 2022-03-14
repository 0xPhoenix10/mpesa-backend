import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutCreditConfigurationInput } from './installment-create-without-credit-configuration.input';
import { InstallmentCreateOrConnectWithoutCreditConfigurationInput } from './installment-create-or-connect-without-credit-configuration.input';
import { InstallmentCreateManyCreditConfigurationInputEnvelope } from './installment-create-many-credit-configuration-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';

@InputType()
export class InstallmentUncheckedCreateNestedManyWithoutCreditConfigurationInput {

    @Field(() => [InstallmentCreateWithoutCreditConfigurationInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutCreditConfigurationInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutCreditConfigurationInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutCreditConfigurationInput>;

    @Field(() => InstallmentCreateManyCreditConfigurationInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyCreditConfigurationInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;
}
