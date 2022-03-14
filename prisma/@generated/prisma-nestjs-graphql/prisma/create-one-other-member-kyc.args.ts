import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtherMemberKYCCreateInput } from '../other-member-kyc/other-member-kyc-create.input';

@ArgsType()
export class CreateOneOtherMemberKycArgs {

    @Field(() => OtherMemberKYCCreateInput, {nullable:false})
    data!: OtherMemberKYCCreateInput;
}
