import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtherMemberKYCWhereUniqueInput } from '../other-member-kyc/other-member-kyc-where-unique.input';

@ArgsType()
export class DeleteOneOtherMemberKycArgs {

    @Field(() => OtherMemberKYCWhereUniqueInput, {nullable:false})
    where!: OtherMemberKYCWhereUniqueInput;
}
