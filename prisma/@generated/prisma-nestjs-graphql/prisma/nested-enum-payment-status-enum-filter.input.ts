import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentStatusEnum } from './payment-status.enum';

@InputType()
export class NestedEnumPaymentStatusEnumFilter {

    @Field(() => PaymentStatusEnum, {nullable:true})
    equals?: keyof typeof PaymentStatusEnum;

    @Field(() => [PaymentStatusEnum], {nullable:true})
    in?: Array<keyof typeof PaymentStatusEnum>;

    @Field(() => [PaymentStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof PaymentStatusEnum>;

    @Field(() => NestedEnumPaymentStatusEnumFilter, {nullable:true})
    not?: NestedEnumPaymentStatusEnumFilter;
}
