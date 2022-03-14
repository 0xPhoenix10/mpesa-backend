import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityScalarWhereInput } from './activity-scalar-where.input';
import { ActivityUpdateManyMutationInput } from './activity-update-many-mutation.input';

@InputType()
export class ActivityUpdateManyWithWhereWithoutUserInput {

    @Field(() => ActivityScalarWhereInput, {nullable:false})
    where!: ActivityScalarWhereInput;

    @Field(() => ActivityUpdateManyMutationInput, {nullable:false})
    data!: ActivityUpdateManyMutationInput;
}
