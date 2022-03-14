import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutCreditInput } from './credit-configuration-create-without-credit.input';
import { CreditConfigurationCreateOrConnectWithoutCreditInput } from './credit-configuration-create-or-connect-without-credit.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';

@InputType()
export class CreditConfigurationCreateNestedOneWithoutCreditInput {

    @Field(() => CreditConfigurationCreateWithoutCreditInput, {nullable:true})
    create?: CreditConfigurationCreateWithoutCreditInput;

    @Field(() => CreditConfigurationCreateOrConnectWithoutCreditInput, {nullable:true})
    connectOrCreate?: CreditConfigurationCreateOrConnectWithoutCreditInput;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    connect?: CreditConfigurationWhereUniqueInput;
}
