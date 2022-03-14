import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentTypesEnum } from './payment-types.enum';

@InputType()
export class NestedEnumPaymentTypesEnumFilter {

    @Field(() => PaymentTypesEnum, {nullable:true})
    equals?: keyof typeof PaymentTypesEnum;

    @Field(() => [PaymentTypesEnum], {nullable:true})
    in?: Array<keyof typeof PaymentTypesEnum>;

    @Field(() => [PaymentTypesEnum], {nullable:true})
    notIn?: Array<keyof typeof PaymentTypesEnum>;

    @Field(() => NestedEnumPaymentTypesEnumFilter, {nullable:true})
    not?: NestedEnumPaymentTypesEnumFilter;
}
