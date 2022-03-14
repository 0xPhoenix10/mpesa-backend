import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutCreditConfigurationInput } from './credit-create-without-credit-configuration.input';
import { CreditCreateOrConnectWithoutCreditConfigurationInput } from './credit-create-or-connect-without-credit-configuration.input';
import { CreditCreateManyCreditConfigurationInputEnvelope } from './credit-create-many-credit-configuration-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';

@InputType()
export class CreditCreateNestedManyWithoutCreditConfigurationInput {

    @Field(() => [CreditCreateWithoutCreditConfigurationInput], {nullable:true})
    create?: Array<CreditCreateWithoutCreditConfigurationInput>;

    @Field(() => [CreditCreateOrConnectWithoutCreditConfigurationInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutCreditConfigurationInput>;

    @Field(() => CreditCreateManyCreditConfigurationInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyCreditConfigurationInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;
}
