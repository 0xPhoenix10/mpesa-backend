import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationWhereInput } from './credit-configuration-where.input';

@InputType()
export class CreditConfigurationListRelationFilter {

    @Field(() => CreditConfigurationWhereInput, {nullable:true})
    every?: CreditConfigurationWhereInput;

    @Field(() => CreditConfigurationWhereInput, {nullable:true})
    some?: CreditConfigurationWhereInput;

    @Field(() => CreditConfigurationWhereInput, {nullable:true})
    none?: CreditConfigurationWhereInput;
}
