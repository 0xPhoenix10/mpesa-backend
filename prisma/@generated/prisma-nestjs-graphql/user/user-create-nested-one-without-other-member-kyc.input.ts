import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOtherMemberKYCInput } from './user-create-without-other-member-kyc.input';
import { UserCreateOrConnectWithoutOtherMemberKYCInput } from './user-create-or-connect-without-other-member-kyc.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOtherMemberKYCInput {

    @Field(() => UserCreateWithoutOtherMemberKYCInput, {nullable:true})
    create?: UserCreateWithoutOtherMemberKYCInput;

    @Field(() => UserCreateOrConnectWithoutOtherMemberKYCInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOtherMemberKYCInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
