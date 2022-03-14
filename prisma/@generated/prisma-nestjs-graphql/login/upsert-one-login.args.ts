import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginWhereUniqueInput } from './login-where-unique.input';
import { LoginCreateInput } from './login-create.input';
import { LoginUpdateInput } from './login-update.input';

@ArgsType()
export class UpsertOneLoginArgs {

    @Field(() => LoginWhereUniqueInput, {nullable:false})
    where!: LoginWhereUniqueInput;

    @Field(() => LoginCreateInput, {nullable:false})
    create!: LoginCreateInput;

    @Field(() => LoginUpdateInput, {nullable:false})
    update!: LoginUpdateInput;
}
