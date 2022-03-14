import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationStatus } from './credit-configuration-status.enum';
import { NestedEnumCreditConfigurationStatusWithAggregatesFilter } from './nested-enum-credit-configuration-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCreditConfigurationStatusFilter } from './nested-enum-credit-configuration-status-filter.input';

@InputType()
export class EnumCreditConfigurationStatusWithAggregatesFilter {

    @Field(() => CreditConfigurationStatus, {nullable:true})
    equals?: keyof typeof CreditConfigurationStatus;

    @Field(() => [CreditConfigurationStatus], {nullable:true})
    in?: Array<keyof typeof CreditConfigurationStatus>;

    @Field(() => [CreditConfigurationStatus], {nullable:true})
    notIn?: Array<keyof typeof CreditConfigurationStatus>;

    @Field(() => NestedEnumCreditConfigurationStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCreditConfigurationStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCreditConfigurationStatusFilter, {nullable:true})
    _min?: NestedEnumCreditConfigurationStatusFilter;

    @Field(() => NestedEnumCreditConfigurationStatusFilter, {nullable:true})
    _max?: NestedEnumCreditConfigurationStatusFilter;
}
