import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { phaseEnum } from './phase.enum';

@InputType()
export class NestedEnumphaseEnumNullableFilter {

    @Field(() => phaseEnum, {nullable:true})
    equals?: keyof typeof phaseEnum;

    @Field(() => [phaseEnum], {nullable:true})
    in?: Array<keyof typeof phaseEnum>;

    @Field(() => [phaseEnum], {nullable:true})
    notIn?: Array<keyof typeof phaseEnum>;

    @Field(() => NestedEnumphaseEnumNullableFilter, {nullable:true})
    not?: NestedEnumphaseEnumNullableFilter;
}
