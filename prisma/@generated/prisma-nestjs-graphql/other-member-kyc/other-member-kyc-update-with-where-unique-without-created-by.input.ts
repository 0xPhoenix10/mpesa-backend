import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherMemberKYCWhereUniqueInput } from './other-member-kyc-where-unique.input';
import { OtherMemberKYCUpdateWithoutCreatedByInput } from './other-member-kyc-update-without-created-by.input';

@InputType()
export class OtherMemberKYCUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => OtherMemberKYCWhereUniqueInput, {nullable:false})
    where!: OtherMemberKYCWhereUniqueInput;

    @Field(() => OtherMemberKYCUpdateWithoutCreatedByInput, {nullable:false})
    data!: OtherMemberKYCUpdateWithoutCreatedByInput;
}
