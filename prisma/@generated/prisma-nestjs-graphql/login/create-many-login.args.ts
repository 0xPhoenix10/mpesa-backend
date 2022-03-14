import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginCreateManyInput } from './login-create-many.input';

@ArgsType()
export class CreateManyLoginArgs {

    @Field(() => [LoginCreateManyInput], {nullable:false})
    data!: Array<LoginCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
