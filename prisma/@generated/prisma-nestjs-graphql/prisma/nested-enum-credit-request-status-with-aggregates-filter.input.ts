import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCreditRequestStatusFilter } from './nested-enum-credit-request-status-filter.input';

@InputType()
export class NestedEnumCreditRequestStatusWithAggregatesFilter {

    @Field(() => CreditRequestStatus, {nullable:true})
    equals?: keyof typeof CreditRequestStatus;

    @Field(() => [CreditRequestStatus], {nullable:true})
    in?: Array<keyof typeof CreditRequestStatus>;

    @Field(() => [CreditRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof CreditRequestStatus>;

    @Field(() => NestedEnumCreditRequestStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCreditRequestStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCreditRequestStatusFilter, {nullable:true})
    _min?: NestedEnumCreditRequestStatusFilter;

    @Field(() => NestedEnumCreditRequestStatusFilter, {nullable:true})
    _max?: NestedEnumCreditRequestStatusFilter;
}
