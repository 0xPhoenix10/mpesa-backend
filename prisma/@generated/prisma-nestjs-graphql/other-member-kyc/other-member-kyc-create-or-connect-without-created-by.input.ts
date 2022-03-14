import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherMemberKYCWhereUniqueInput } from './other-member-kyc-where-unique.input';
import { OtherMemberKYCCreateWithoutCreatedByInput } from './other-member-kyc-create-without-created-by.input';

@InputType()
export class OtherMemberKYCCreateOrConnectWithoutCreatedByInput {

    @Field(() => OtherMemberKYCWhereUniqueInput, {nullable:false})
    where!: OtherMemberKYCWhereUniqueInput;

    @Field(() => OtherMemberKYCCreateWithoutCreatedByInput, {nullable:false})
    create!: OtherMemberKYCCreateWithoutCreatedByInput;
}
