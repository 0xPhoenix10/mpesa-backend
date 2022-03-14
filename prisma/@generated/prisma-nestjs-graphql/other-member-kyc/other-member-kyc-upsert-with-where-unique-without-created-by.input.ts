import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherMemberKYCWhereUniqueInput } from './other-member-kyc-where-unique.input';
import { OtherMemberKYCUpdateWithoutCreatedByInput } from './other-member-kyc-update-without-created-by.input';
import { OtherMemberKYCCreateWithoutCreatedByInput } from './other-member-kyc-create-without-created-by.input';

@InputType()
export class OtherMemberKYCUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => OtherMemberKYCWhereUniqueInput, {nullable:false})
    where!: OtherMemberKYCWhereUniqueInput;

    @Field(() => OtherMemberKYCUpdateWithoutCreatedByInput, {nullable:false})
    update!: OtherMemberKYCUpdateWithoutCreatedByInput;

    @Field(() => OtherMemberKYCCreateWithoutCreatedByInput, {nullable:false})
    create!: OtherMemberKYCCreateWithoutCreatedByInput;
}
