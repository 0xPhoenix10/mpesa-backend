import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtherMemberKYCCreateManyInput } from '../other-member-kyc/other-member-kyc-create-many.input';

@ArgsType()
export class CreateManyOtherMemberKycArgs {

    @Field(() => [OtherMemberKYCCreateManyInput], {nullable:false})
    data!: Array<OtherMemberKYCCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
