import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsUpdateInput } from './credit-configurations-wallets-update.input';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';

@ArgsType()
export class UpdateOneCreditConfigurationsWalletsArgs {

    @Field(() => CreditConfigurationsWalletsUpdateInput, {nullable:false})
    data!: CreditConfigurationsWalletsUpdateInput;

    @Field(() => CreditConfigurationsWalletsWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationsWalletsWhereUniqueInput;
}
