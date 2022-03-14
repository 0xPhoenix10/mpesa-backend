import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCreditsInput } from './user-update-without-credits.input';
import { UserCreateWithoutCreditsInput } from './user-create-without-credits.input';

@InputType()
export class UserUpsertWithoutCreditsInput {

    @Field(() => UserUpdateWithoutCreditsInput, {nullable:false})
    update!: UserUpdateWithoutCreditsInput;

    @Field(() => UserCreateWithoutCreditsInput, {nullable:false})
    create!: UserCreateWithoutCreditsInput;
}
