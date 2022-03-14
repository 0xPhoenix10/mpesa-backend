import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsWhereInput } from './settings-where.input';

@ArgsType()
export class DeleteManySettingsArgs {

    @Field(() => SettingsWhereInput, {nullable:true})
    where?: SettingsWhereInput;
}
