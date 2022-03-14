import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtherMemberKYCWhereInput } from '../other-member-kyc/other-member-kyc-where.input';
import { OtherMemberKYCOrderByWithRelationInput } from '../other-member-kyc/other-member-kyc-order-by-with-relation.input';
import { OtherMemberKYCWhereUniqueInput } from '../other-member-kyc/other-member-kyc-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateOtherMemberKycArgs {

    @Field(() => OtherMemberKYCWhereInput, {nullable:true})
    where?: OtherMemberKYCWhereInput;

    @Field(() => [OtherMemberKYCOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OtherMemberKYCOrderByWithRelationInput>;

    @Field(() => OtherMemberKYCWhereUniqueInput, {nullable:true})
    cursor?: OtherMemberKYCWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
