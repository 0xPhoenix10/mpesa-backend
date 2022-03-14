import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentStatusEnum } from './payment-status.enum';
import { NestedEnumPaymentStatusEnumFilter } from './nested-enum-payment-status-enum-filter.input';

@InputType()
export class EnumPaymentStatusEnumFilter {

    @Field(() => PaymentStatusEnum, {nullable:true})
    equals?: keyof typeof PaymentStatusEnum;

    @Field(() => [PaymentStatusEnum], {nullable:true})
    in?: Array<keyof typeof PaymentStatusEnum>;

    @Field(() => [PaymentStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof PaymentStatusEnum>;

    @Field(() => NestedEnumPaymentStatusEnumFilter, {nullable:true})
    not?: NestedEnumPaymentStatusEnumFilter;
}
