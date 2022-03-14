import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationScalarWhereInput } from './credit-configuration-scalar-where.input';
import { CreditConfigurationUpdateManyMutationInput } from './credit-configuration-update-many-mutation.input';

@InputType()
export class CreditConfigurationUpdateManyWithWhereWithoutWalletInput {

    @Field(() => CreditConfigurationScalarWhereInput, {nullable:false})
    where!: CreditConfigurationScalarWhereInput;

    @Field(() => CreditConfigurationUpdateManyMutationInput, {nullable:false})
    data!: CreditConfigurationUpdateManyMutationInput;
}
