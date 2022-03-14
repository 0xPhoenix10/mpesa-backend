import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherMemberKYCCreateWithoutCreatedByInput } from './other-member-kyc-create-without-created-by.input';
import { OtherMemberKYCCreateOrConnectWithoutCreatedByInput } from './other-member-kyc-create-or-connect-without-created-by.input';
import { OtherMemberKYCCreateManyCreatedByInputEnvelope } from './other-member-kyc-create-many-created-by-input-envelope.input';
import { OtherMemberKYCWhereUniqueInput } from './other-member-kyc-where-unique.input';

@InputType()
export class OtherMemberKYCCreateNestedManyWithoutCreatedByInput {

    @Field(() => [OtherMemberKYCCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<OtherMemberKYCCreateWithoutCreatedByInput>;

    @Field(() => [OtherMemberKYCCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<OtherMemberKYCCreateOrConnectWithoutCreatedByInput>;

    @Field(() => OtherMemberKYCCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: OtherMemberKYCCreateManyCreatedByInputEnvelope;

    @Field(() => [OtherMemberKYCWhereUniqueInput], {nullable:true})
    connect?: Array<OtherMemberKYCWhereUniqueInput>;
}
