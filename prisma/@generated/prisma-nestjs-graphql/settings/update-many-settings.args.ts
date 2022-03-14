import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsUpdateManyMutationInput } from './settings-update-many-mutation.input';
import { SettingsWhereInput } from './settings-where.input';

@ArgsType()
export class UpdateManySettingsArgs {

    @Field(() => SettingsUpdateManyMutationInput, {nullable:false})
    data!: SettingsUpdateManyMutationInput;

    @Field(() => SettingsWhereInput, {nullable:true})
    where?: SettingsWhereInput;
}
