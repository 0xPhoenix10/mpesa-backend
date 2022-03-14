import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';

@ArgsType()
export class FindUniqueCreditConfigurationsWalletsArgs {

    @Field(() => CreditConfigurationsWalletsWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationsWalletsWhereUniqueInput;
}
