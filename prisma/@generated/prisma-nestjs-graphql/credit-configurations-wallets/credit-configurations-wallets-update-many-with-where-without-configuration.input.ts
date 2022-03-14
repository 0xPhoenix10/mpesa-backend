import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsScalarWhereInput } from './credit-configurations-wallets-scalar-where.input';
import { CreditConfigurationsWalletsUpdateManyMutationInput } from './credit-configurations-wallets-update-many-mutation.input';

@InputType()
export class CreditConfigurationsWalletsUpdateManyWithWhereWithoutConfigurationInput {

    @Field(() => CreditConfigurationsWalletsScalarWhereInput, {nullable:false})
    where!: CreditConfigurationsWalletsScalarWhereInput;

    @Field(() => CreditConfigurationsWalletsUpdateManyMutationInput, {nullable:false})
    data!: CreditConfigurationsWalletsUpdateManyMutationInput;
}
