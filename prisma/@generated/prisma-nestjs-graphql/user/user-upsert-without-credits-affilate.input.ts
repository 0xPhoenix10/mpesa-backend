import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCreditsAffilateInput } from './user-update-without-credits-affilate.input';
import { UserCreateWithoutCreditsAffilateInput } from './user-create-without-credits-affilate.input';

@InputType()
export class UserUpsertWithoutCreditsAffilateInput {

    @Field(() => UserUpdateWithoutCreditsAffilateInput, {nullable:false})
    update!: UserUpdateWithoutCreditsAffilateInput;

    @Field(() => UserCreateWithoutCreditsAffilateInput, {nullable:false})
    create!: UserCreateWithoutCreditsAffilateInput;
}
