import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { SettingsCreateInput } from './settings-create.input';
import { SettingsUpdateInput } from './settings-update.input';

@ArgsType()
export class UpsertOneSettingsArgs {

    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    where!: SettingsWhereUniqueInput;

    @Field(() => SettingsCreateInput, {nullable:false})
    create!: SettingsCreateInput;

    @Field(() => SettingsUpdateInput, {nullable:false})
    update!: SettingsUpdateInput;
}
