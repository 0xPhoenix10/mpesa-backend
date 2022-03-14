import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language } from './language.enum';

@InputType()
export class NestedEnumlanguageFilter {

    @Field(() => language, {nullable:true})
    equals?: keyof typeof language;

    @Field(() => [language], {nullable:true})
    in?: Array<keyof typeof language>;

    @Field(() => [language], {nullable:true})
    notIn?: Array<keyof typeof language>;

    @Field(() => NestedEnumlanguageFilter, {nullable:true})
    not?: NestedEnumlanguageFilter;
}
