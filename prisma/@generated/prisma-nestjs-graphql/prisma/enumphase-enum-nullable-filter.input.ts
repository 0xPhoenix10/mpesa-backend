import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { phaseEnum } from './phase.enum';
import { NestedEnumphaseEnumNullableFilter } from './nested-enumphase-enum-nullable-filter.input';

@InputType()
export class EnumphaseEnumNullableFilter {

    @Field(() => phaseEnum, {nullable:true})
    equals?: keyof typeof phaseEnum;

    @Field(() => [phaseEnum], {nullable:true})
    in?: Array<keyof typeof phaseEnum>;

    @Field(() => [phaseEnum], {nullable:true})
    notIn?: Array<keyof typeof phaseEnum>;

    @Field(() => NestedEnumphaseEnumNullableFilter, {nullable:true})
    not?: NestedEnumphaseEnumNullableFilter;
}
