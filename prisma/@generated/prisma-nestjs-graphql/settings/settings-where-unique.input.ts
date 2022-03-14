import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SettingsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    walletAccount?: string;
}
