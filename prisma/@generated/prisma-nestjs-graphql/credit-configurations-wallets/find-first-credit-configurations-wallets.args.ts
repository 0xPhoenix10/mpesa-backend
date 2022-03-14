import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereInput } from './credit-configurations-wallets-where.input';
import { CreditConfigurationsWalletsOrderByWithRelationInput } from './credit-configurations-wallets-order-by-with-relation.input';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CreditConfigurationsWalletsScalarFieldEnum } from './credit-configurations-wallets-scalar-field.enum';

@ArgsType()
export class FindFirstCreditConfigurationsWalletsArgs {

    @Field(() => CreditConfigurationsWalletsWhereInput, {nullable:true})
    where?: CreditConfigurationsWalletsWhereInput;

    @Field(() => [CreditConfigurationsWalletsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CreditConfigurationsWalletsOrderByWithRelationInput>;

    @Field(() => CreditConfigurationsWalletsWhereUniqueInput, {nullable:true})
    cursor?: CreditConfigurationsWalletsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CreditConfigurationsWalletsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CreditConfigurationsWalletsScalarFieldEnum>;
}
