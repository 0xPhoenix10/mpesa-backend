import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EcommercePlatformEnum } from './ecommerce-platform.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumEcommercePlatformEnumNullableFilter } from './nested-enum-ecommerce-platform-enum-nullable-filter.input';

@InputType()
export class NestedEnumEcommercePlatformEnumNullableWithAggregatesFilter {

    @Field(() => EcommercePlatformEnum, {nullable:true})
    equals?: keyof typeof EcommercePlatformEnum;

    @Field(() => [EcommercePlatformEnum], {nullable:true})
    in?: Array<keyof typeof EcommercePlatformEnum>;

    @Field(() => [EcommercePlatformEnum], {nullable:true})
    notIn?: Array<keyof typeof EcommercePlatformEnum>;

    @Field(() => NestedEnumEcommercePlatformEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEcommercePlatformEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumEcommercePlatformEnumNullableFilter, {nullable:true})
    _min?: NestedEnumEcommercePlatformEnumNullableFilter;

    @Field(() => NestedEnumEcommercePlatformEnumNullableFilter, {nullable:true})
    _max?: NestedEnumEcommercePlatformEnumNullableFilter;
}
