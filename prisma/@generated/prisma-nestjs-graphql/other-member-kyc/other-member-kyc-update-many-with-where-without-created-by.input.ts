import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherMemberKYCScalarWhereInput } from './other-member-kyc-scalar-where.input';
import { OtherMemberKYCUpdateManyMutationInput } from './other-member-kyc-update-many-mutation.input';

@InputType()
export class OtherMemberKYCUpdateManyWithWhereWithoutCreatedByInput {

    @Field(() => OtherMemberKYCScalarWhereInput, {nullable:false})
    where!: OtherMemberKYCScalarWhereInput;

    @Field(() => OtherMemberKYCUpdateManyMutationInput, {nullable:false})
    data!: OtherMemberKYCUpdateManyMutationInput;
}
