import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifyScalarWhereInput } from './verify-scalar-where.input';
import { VerifyUpdateManyMutationInput } from './verify-update-many-mutation.input';

@InputType()
export class VerifyUpdateManyWithWhereWithoutUserInput {

    @Field(() => VerifyScalarWhereInput, {nullable:false})
    where!: VerifyScalarWhereInput;

    @Field(() => VerifyUpdateManyMutationInput, {nullable:false})
    data!: VerifyUpdateManyMutationInput;
}
