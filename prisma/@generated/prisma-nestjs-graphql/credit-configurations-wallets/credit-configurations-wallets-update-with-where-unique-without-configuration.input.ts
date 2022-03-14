import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';
import { CreditConfigurationsWalletsUpdateWithoutConfigurationInput } from './credit-configurations-wallets-update-without-configuration.input';

@InputType()
export class CreditConfigurationsWalletsUpdateWithWhereUniqueWithoutConfigurationInput {

    @Field(() => CreditConfigurationsWalletsWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationsWalletsWhereUniqueInput;

    @Field(() => CreditConfigurationsWalletsUpdateWithoutConfigurationInput, {nullable:false})
    data!: CreditConfigurationsWalletsUpdateWithoutConfigurationInput;
}
