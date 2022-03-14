import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { legalStatusEnum } from './legal-status.enum';
import { NestedEnumlegalStatusEnumNullableFilter } from './nested-enumlegal-status-enum-nullable-filter.input';

@InputType()
export class EnumlegalStatusEnumNullableFilter {

    @Field(() => legalStatusEnum, {nullable:true})
    equals?: keyof typeof legalStatusEnum;

    @Field(() => [legalStatusEnum], {nullable:true})
    in?: Array<keyof typeof legalStatusEnum>;

    @Field(() => [legalStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof legalStatusEnum>;

    @Field(() => NestedEnumlegalStatusEnumNullableFilter, {nullable:true})
    not?: NestedEnumlegalStatusEnumNullableFilter;
}
