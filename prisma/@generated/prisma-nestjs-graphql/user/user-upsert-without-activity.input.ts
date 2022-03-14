import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutActivityInput } from './user-update-without-activity.input';
import { UserCreateWithoutActivityInput } from './user-create-without-activity.input';

@InputType()
export class UserUpsertWithoutActivityInput {

    @Field(() => UserUpdateWithoutActivityInput, {nullable:false})
    update!: UserUpdateWithoutActivityInput;

    @Field(() => UserCreateWithoutActivityInput, {nullable:false})
    create!: UserCreateWithoutActivityInput;
}
