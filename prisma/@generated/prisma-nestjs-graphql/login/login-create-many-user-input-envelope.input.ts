import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginCreateManyUserInput } from './login-create-many-user.input';

@InputType()
export class LoginCreateManyUserInputEnvelope {

    @Field(() => [LoginCreateManyUserInput], {nullable:false})
    data!: Array<LoginCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
