import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';

@ArgsType()
export class DeleteOneSettingsArgs {

    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    where!: SettingsWhereUniqueInput;
}
