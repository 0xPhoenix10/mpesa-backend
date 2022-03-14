import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOtherMemberKYCInput } from './user-create-without-other-member-kyc.input';
import { UserCreateOrConnectWithoutOtherMemberKYCInput } from './user-create-or-connect-without-other-member-kyc.input';
import { UserUpsertWithoutOtherMemberKYCInput } from './user-upsert-without-other-member-kyc.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutOtherMemberKYCInput } from './user-update-without-other-member-kyc.input';

@InputType()
export class UserUpdateOneRequiredWithoutOtherMemberKYCInput {

    @Field(() => UserCreateWithoutOtherMemberKYCInput, {nullable:true})
    create?: UserCreateWithoutOtherMemberKYCInput;

    @Field(() => UserCreateOrConnectWithoutOtherMemberKYCInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOtherMemberKYCInput;

    @Field(() => UserUpsertWithoutOtherMemberKYCInput, {nullable:true})
    upsert?: UserUpsertWithoutOtherMemberKYCInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOtherMemberKYCInput, {nullable:true})
    update?: UserUpdateWithoutOtherMemberKYCInput;
}
