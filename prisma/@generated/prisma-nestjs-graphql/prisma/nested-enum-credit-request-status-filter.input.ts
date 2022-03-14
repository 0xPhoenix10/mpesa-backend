import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';

@InputType()
export class NestedEnumCreditRequestStatusFilter {

    @Field(() => CreditRequestStatus, {nullable:true})
    equals?: keyof typeof CreditRequestStatus;

    @Field(() => [CreditRequestStatus], {nullable:true})
    in?: Array<keyof typeof CreditRequestStatus>;

    @Field(() => [CreditRequestStatus], {nullable:true})
    notIn?: Array<keyof typeof CreditRequestStatus>;

    @Field(() => NestedEnumCreditRequestStatusFilter, {nullable:true})
    not?: NestedEnumCreditRequestStatusFilter;
}
