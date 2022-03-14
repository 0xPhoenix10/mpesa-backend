import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsCreateInput } from './settings-create.input';

@ArgsType()
export class CreateOneSettingsArgs {

    @Field(() => SettingsCreateInput, {nullable:false})
    data!: SettingsCreateInput;
}
