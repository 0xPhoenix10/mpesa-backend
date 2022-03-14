import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtherMemberKYCWhereInput } from '../other-member-kyc/other-member-kyc-where.input';

@ArgsType()
export class DeleteManyOtherMemberKycArgs {

    @Field(() => OtherMemberKYCWhereInput, {nullable:true})
    where?: OtherMemberKYCWhereInput;
}
