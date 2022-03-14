import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutVisitInput } from './user-update-without-visit.input';
import { UserCreateWithoutVisitInput } from './user-create-without-visit.input';

@InputType()
export class UserUpsertWithoutVisitInput {

    @Field(() => UserUpdateWithoutVisitInput, {nullable:false})
    update!: UserUpdateWithoutVisitInput;

    @Field(() => UserCreateWithoutVisitInput, {nullable:false})
    create!: UserCreateWithoutVisitInput;
}
