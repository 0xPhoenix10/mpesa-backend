import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationWhereInput } from './credit-configuration-where.input';
import { CreditConfigurationOrderByWithRelationInput } from './credit-configuration-order-by-with-relation.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CreditConfigurationScalarFieldEnum } from './credit-configuration-scalar-field.enum';

@ArgsType()
export class FindManyCreditConfigurationArgs {

    @Field(() => CreditConfigurationWhereInput, {nullable:true})
    where?: CreditConfigurationWhereInput;

    @Field(() => [CreditConfigurationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CreditConfigurationOrderByWithRelationInput>;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    cursor?: CreditConfigurationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CreditConfigurationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CreditConfigurationScalarFieldEnum>;
}
