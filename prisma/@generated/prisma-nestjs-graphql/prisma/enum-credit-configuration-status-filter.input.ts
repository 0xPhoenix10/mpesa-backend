import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationStatus } from './credit-configuration-status.enum';
import { NestedEnumCreditConfigurationStatusFilter } from './nested-enum-credit-configuration-status-filter.input';

@InputType()
export class EnumCreditConfigurationStatusFilter {

    @Field(() => CreditConfigurationStatus, {nullable:true})
    equals?: keyof typeof CreditConfigurationStatus;

    @Field(() => [CreditConfigurationStatus], {nullable:true})
    in?: Array<keyof typeof CreditConfigurationStatus>;

    @Field(() => [CreditConfigurationStatus], {nullable:true})
    notIn?: Array<keyof typeof CreditConfigurationStatus>;

    @Field(() => NestedEnumCreditConfigurationStatusFilter, {nullable:true})
    not?: NestedEnumCreditConfigurationStatusFilter;
}
