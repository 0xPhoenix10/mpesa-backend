import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOtherMemberKYCInput } from './user-update-without-other-member-kyc.input';
import { UserCreateWithoutOtherMemberKYCInput } from './user-create-without-other-member-kyc.input';

@InputType()
export class UserUpsertWithoutOtherMemberKYCInput {

    @Field(() => UserUpdateWithoutOtherMemberKYCInput, {nullable:false})
    update!: UserUpdateWithoutOtherMemberKYCInput;

    @Field(() => UserCreateWithoutOtherMemberKYCInput, {nullable:false})
    create!: UserCreateWithoutOtherMemberKYCInput;
}
