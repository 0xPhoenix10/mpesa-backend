import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';
import { CreditConfigurationsWalletsCreateInput } from './credit-configurations-wallets-create.input';
import { CreditConfigurationsWalletsUpdateInput } from './credit-configurations-wallets-update.input';

@ArgsType()
export class UpsertOneCreditConfigurationsWalletsArgs {

    @Field(() => CreditConfigurationsWalletsWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationsWalletsWhereUniqueInput;

    @Field(() => CreditConfigurationsWalletsCreateInput, {nullable:false})
    create!: CreditConfigurationsWalletsCreateInput;

    @Field(() => CreditConfigurationsWalletsUpdateInput, {nullable:false})
    update!: CreditConfigurationsWalletsUpdateInput;
}
