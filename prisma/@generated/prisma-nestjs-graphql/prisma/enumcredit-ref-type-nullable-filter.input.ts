import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { creditRefType } from './credit-ref-type.enum';
import { NestedEnumcreditRefTypeNullableFilter } from './nested-enumcredit-ref-type-nullable-filter.input';

@InputType()
export class EnumcreditRefTypeNullableFilter {

    @Field(() => creditRefType, {nullable:true})
    equals?: keyof typeof creditRefType;

    @Field(() => [creditRefType], {nullable:true})
    in?: Array<keyof typeof creditRefType>;

    @Field(() => [creditRefType], {nullable:true})
    notIn?: Array<keyof typeof creditRefType>;

    @Field(() => NestedEnumcreditRefTypeNullableFilter, {nullable:true})
    not?: NestedEnumcreditRefTypeNullableFilter;
}
