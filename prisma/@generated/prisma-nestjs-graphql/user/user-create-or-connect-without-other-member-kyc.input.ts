import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutOtherMemberKYCInput } from './user-create-without-other-member-kyc.input';

@InputType()
export class UserCreateOrConnectWithoutOtherMemberKYCInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutOtherMemberKYCInput, {nullable:false})
    create!: UserCreateWithoutOtherMemberKYCInput;
}
