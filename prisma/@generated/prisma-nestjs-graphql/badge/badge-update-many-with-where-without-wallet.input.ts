import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeScalarWhereInput } from './badge-scalar-where.input';
import { BadgeUpdateManyMutationInput } from './badge-update-many-mutation.input';

@InputType()
export class BadgeUpdateManyWithWhereWithoutWalletInput {

    @Field(() => BadgeScalarWhereInput, {nullable:false})
    where!: BadgeScalarWhereInput;

    @Field(() => BadgeUpdateManyMutationInput, {nullable:false})
    data!: BadgeUpdateManyMutationInput;
}
