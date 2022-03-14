import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SlicesEnum } from './slices.enum';

@InputType()
export class NestedEnumSlicesEnumFilter {

    @Field(() => SlicesEnum, {nullable:true})
    equals?: keyof typeof SlicesEnum;

    @Field(() => [SlicesEnum], {nullable:true})
    in?: Array<keyof typeof SlicesEnum>;

    @Field(() => [SlicesEnum], {nullable:true})
    notIn?: Array<keyof typeof SlicesEnum>;

    @Field(() => NestedEnumSlicesEnumFilter, {nullable:true})
    not?: NestedEnumSlicesEnumFilter;
}
