import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { legalStatusEnum } from './legal-status.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumlegalStatusEnumNullableFilter } from './nested-enumlegal-status-enum-nullable-filter.input';

@InputType()
export class NestedEnumlegalStatusEnumNullableWithAggregatesFilter {

    @Field(() => legalStatusEnum, {nullable:true})
    equals?: keyof typeof legalStatusEnum;

    @Field(() => [legalStatusEnum], {nullable:true})
    in?: Array<keyof typeof legalStatusEnum>;

    @Field(() => [legalStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof legalStatusEnum>;

    @Field(() => NestedEnumlegalStatusEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumlegalStatusEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumlegalStatusEnumNullableFilter, {nullable:true})
    _min?: NestedEnumlegalStatusEnumNullableFilter;

    @Field(() => NestedEnumlegalStatusEnumNullableFilter, {nullable:true})
    _max?: NestedEnumlegalStatusEnumNullableFilter;
}
