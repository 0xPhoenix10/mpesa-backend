import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtherMemberKYCUpdateInput } from '../other-member-kyc/other-member-kyc-update.input';
import { OtherMemberKYCWhereUniqueInput } from '../other-member-kyc/other-member-kyc-where-unique.input';

@ArgsType()
export class UpdateOneOtherMemberKycArgs {

    @Field(() => OtherMemberKYCUpdateInput, {nullable:false})
    data!: OtherMemberKYCUpdateInput;

    @Field(() => OtherMemberKYCWhereUniqueInput, {nullable:false})
    where!: OtherMemberKYCWhereUniqueInput;
}
