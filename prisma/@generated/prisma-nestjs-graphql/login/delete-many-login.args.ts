import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginWhereInput } from './login-where.input';

@ArgsType()
export class DeleteManyLoginArgs {

    @Field(() => LoginWhereInput, {nullable:true})
    where?: LoginWhereInput;
}
