import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SlicesEnum } from './slices.enum';

@InputType()
export class EnumSlicesEnumNullableListFilter {

    @Field(() => [SlicesEnum], {nullable:true})
    equals?: Array<keyof typeof SlicesEnum>;

    @Field(() => SlicesEnum, {nullable:true})
    has?: keyof typeof SlicesEnum;

    @Field(() => [SlicesEnum], {nullable:true})
    hasEvery?: Array<keyof typeof SlicesEnum>;

    @Field(() => [SlicesEnum], {nullable:true})
    hasSome?: Array<keyof typeof SlicesEnum>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
