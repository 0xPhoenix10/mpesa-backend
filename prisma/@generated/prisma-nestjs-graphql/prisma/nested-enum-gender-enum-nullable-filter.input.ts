import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderEnum } from './gender.enum';

@InputType()
export class NestedEnumGenderEnumNullableFilter {

    @Field(() => GenderEnum, {nullable:true})
    equals?: keyof typeof GenderEnum;

    @Field(() => [GenderEnum], {nullable:true})
    in?: Array<keyof typeof GenderEnum>;

    @Field(() => [GenderEnum], {nullable:true})
    notIn?: Array<keyof typeof GenderEnum>;

    @Field(() => NestedEnumGenderEnumNullableFilter, {nullable:true})
    not?: NestedEnumGenderEnumNullableFilter;
}
