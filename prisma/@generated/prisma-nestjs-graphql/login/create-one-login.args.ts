import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginCreateInput } from './login-create.input';

@ArgsType()
export class CreateOneLoginArgs {

    @Field(() => LoginCreateInput, {nullable:false})
    data!: LoginCreateInput;
}
