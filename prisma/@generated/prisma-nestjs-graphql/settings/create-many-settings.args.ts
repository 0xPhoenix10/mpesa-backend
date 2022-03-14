import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsCreateManyInput } from './settings-create-many.input';

@ArgsType()
export class CreateManySettingsArgs {

    @Field(() => [SettingsCreateManyInput], {nullable:false})
    data!: Array<SettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
