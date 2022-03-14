import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtherMemberKYCUpdateManyMutationInput } from '../other-member-kyc/other-member-kyc-update-many-mutation.input';
import { OtherMemberKYCWhereInput } from '../other-member-kyc/other-member-kyc-where.input';

@ArgsType()
export class UpdateManyOtherMemberKycArgs {

    @Field(() => OtherMemberKYCUpdateManyMutationInput, {nullable:false})
    data!: OtherMemberKYCUpdateManyMutationInput;

    @Field(() => OtherMemberKYCWhereInput, {nullable:true})
    where?: OtherMemberKYCWhereInput;
}
