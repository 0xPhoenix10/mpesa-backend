import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationWhereInput } from './credit-configuration-where.input';

@InputType()
export class CreditConfigurationRelationFilter {

    @Field(() => CreditConfigurationWhereInput, {nullable:true})
    is?: CreditConfigurationWhereInput;

    @Field(() => CreditConfigurationWhereInput, {nullable:true})
    isNot?: CreditConfigurationWhereInput;
}
