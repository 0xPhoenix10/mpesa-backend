import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherMemberKYCCreateWithoutCreatedByInput } from './other-member-kyc-create-without-created-by.input';
import { OtherMemberKYCCreateOrConnectWithoutCreatedByInput } from './other-member-kyc-create-or-connect-without-created-by.input';
import { OtherMemberKYCUpsertWithWhereUniqueWithoutCreatedByInput } from './other-member-kyc-upsert-with-where-unique-without-created-by.input';
import { OtherMemberKYCCreateManyCreatedByInputEnvelope } from './other-member-kyc-create-many-created-by-input-envelope.input';
import { OtherMemberKYCWhereUniqueInput } from './other-member-kyc-where-unique.input';
import { OtherMemberKYCUpdateWithWhereUniqueWithoutCreatedByInput } from './other-member-kyc-update-with-where-unique-without-created-by.input';
import { OtherMemberKYCUpdateManyWithWhereWithoutCreatedByInput } from './other-member-kyc-update-many-with-where-without-created-by.input';
import { OtherMemberKYCScalarWhereInput } from './other-member-kyc-scalar-where.input';

@InputType()
export class OtherMemberKYCUpdateManyWithoutCreatedByInput {

    @Field(() => [OtherMemberKYCCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<OtherMemberKYCCreateWithoutCreatedByInput>;

    @Field(() => [OtherMemberKYCCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<OtherMemberKYCCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [OtherMemberKYCUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    upsert?: Array<OtherMemberKYCUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => OtherMemberKYCCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: OtherMemberKYCCreateManyCreatedByInputEnvelope;

    @Field(() => [OtherMemberKYCWhereUniqueInput], {nullable:true})
    set?: Array<OtherMemberKYCWhereUniqueInput>;

    @Field(() => [OtherMemberKYCWhereUniqueInput], {nullable:true})
    disconnect?: Array<OtherMemberKYCWhereUniqueInput>;

    @Field(() => [OtherMemberKYCWhereUniqueInput], {nullable:true})
    delete?: Array<OtherMemberKYCWhereUniqueInput>;

    @Field(() => [OtherMemberKYCWhereUniqueInput], {nullable:true})
    connect?: Array<OtherMemberKYCWhereUniqueInput>;

    @Field(() => [OtherMemberKYCUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    update?: Array<OtherMemberKYCUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [OtherMemberKYCUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    updateMany?: Array<OtherMemberKYCUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [OtherMemberKYCScalarWhereInput], {nullable:true})
    deleteMany?: Array<OtherMemberKYCScalarWhereInput>;
}
