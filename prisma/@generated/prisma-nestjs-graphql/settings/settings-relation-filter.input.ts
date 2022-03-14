import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsWhereInput } from './settings-where.input';

@InputType()
export class SettingsRelationFilter {

    @Field(() => SettingsWhereInput, {nullable:true})
    is?: SettingsWhereInput;

    @Field(() => SettingsWhereInput, {nullable:true})
    isNot?: SettingsWhereInput;
}
