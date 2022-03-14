import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EcommercePlatformEnum } from './ecommerce-platform.enum';

@InputType()
export class NestedEnumEcommercePlatformEnumNullableFilter {

    @Field(() => EcommercePlatformEnum, {nullable:true})
    equals?: keyof typeof EcommercePlatformEnum;

    @Field(() => [EcommercePlatformEnum], {nullable:true})
    in?: Array<keyof typeof EcommercePlatformEnum>;

    @Field(() => [EcommercePlatformEnum], {nullable:true})
    notIn?: Array<keyof typeof EcommercePlatformEnum>;

    @Field(() => NestedEnumEcommercePlatformEnumNullableFilter, {nullable:true})
    not?: NestedEnumEcommercePlatformEnumNullableFilter;
}
