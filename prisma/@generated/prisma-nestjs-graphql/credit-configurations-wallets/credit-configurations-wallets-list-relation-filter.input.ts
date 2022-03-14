import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereInput } from './credit-configurations-wallets-where.input';

@InputType()
export class CreditConfigurationsWalletsListRelationFilter {

    @Field(() => CreditConfigurationsWalletsWhereInput, {nullable:true})
    every?: CreditConfigurationsWalletsWhereInput;

    @Field(() => CreditConfigurationsWalletsWhereInput, {nullable:true})
    some?: CreditConfigurationsWalletsWhereInput;

    @Field(() => CreditConfigurationsWalletsWhereInput, {nullable:true})
    none?: CreditConfigurationsWalletsWhereInput;
}
