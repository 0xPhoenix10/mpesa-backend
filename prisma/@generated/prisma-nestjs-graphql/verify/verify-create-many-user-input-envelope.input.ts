import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifyCreateManyUserInput } from './verify-create-many-user.input';

@InputType()
export class VerifyCreateManyUserInputEnvelope {

    @Field(() => [VerifyCreateManyUserInput], {nullable:false})
    data!: Array<VerifyCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
