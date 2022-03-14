import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsUpdateInput } from './settings-update.input';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';

@ArgsType()
export class UpdateOneSettingsArgs {

    @Field(() => SettingsUpdateInput, {nullable:false})
    data!: SettingsUpdateInput;

    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    where!: SettingsWhereUniqueInput;
}
