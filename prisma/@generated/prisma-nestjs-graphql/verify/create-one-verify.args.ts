import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyCreateInput } from './verify-create.input';

@ArgsType()
export class CreateOneVerifyArgs {

    @Field(() => VerifyCreateInput, {nullable:false})
    data!: VerifyCreateInput;
}
