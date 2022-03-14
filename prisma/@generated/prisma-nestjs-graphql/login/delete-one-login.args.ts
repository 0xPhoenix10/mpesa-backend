import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginWhereUniqueInput } from './login-where-unique.input';

@ArgsType()
export class DeleteOneLoginArgs {

    @Field(() => LoginWhereUniqueInput, {nullable:false})
    where!: LoginWhereUniqueInput;
}
