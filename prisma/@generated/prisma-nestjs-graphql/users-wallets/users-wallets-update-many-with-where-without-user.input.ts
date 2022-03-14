import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsScalarWhereInput } from './users-wallets-scalar-where.input';
import { UsersWalletsUpdateManyMutationInput } from './users-wallets-update-many-mutation.input';

@InputType()
export class UsersWalletsUpdateManyWithWhereWithoutUserInput {

    @Field(() => UsersWalletsScalarWhereInput, {nullable:false})
    where!: UsersWalletsScalarWhereInput;

    @Field(() => UsersWalletsUpdateManyMutationInput, {nullable:false})
    data!: UsersWalletsUpdateManyMutationInput;
}
