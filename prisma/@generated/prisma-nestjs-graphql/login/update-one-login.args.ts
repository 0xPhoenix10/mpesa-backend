import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginUpdateInput } from './login-update.input';
import { LoginWhereUniqueInput } from './login-where-unique.input';

@ArgsType()
export class UpdateOneLoginArgs {

    @Field(() => LoginUpdateInput, {nullable:false})
    data!: LoginUpdateInput;

    @Field(() => LoginWhereUniqueInput, {nullable:false})
    where!: LoginWhereUniqueInput;
}
