import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtherMemberKYCWhereUniqueInput } from '../other-member-kyc/other-member-kyc-where-unique.input';
import { OtherMemberKYCCreateInput } from '../other-member-kyc/other-member-kyc-create.input';
import { OtherMemberKYCUpdateInput } from '../other-member-kyc/other-member-kyc-update.input';

@ArgsType()
export class UpsertOneOtherMemberKycArgs {

    @Field(() => OtherMemberKYCWhereUniqueInput, {nullable:false})
    where!: OtherMemberKYCWhereUniqueInput;

    @Field(() => OtherMemberKYCCreateInput, {nullable:false})
    create!: OtherMemberKYCCreateInput;

    @Field(() => OtherMemberKYCUpdateInput, {nullable:false})
    update!: OtherMemberKYCUpdateInput;
}
