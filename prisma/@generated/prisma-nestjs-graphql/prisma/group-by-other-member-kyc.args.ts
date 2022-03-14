import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtherMemberKYCWhereInput } from '../other-member-kyc/other-member-kyc-where.input';
import { OtherMemberKYCOrderByWithAggregationInput } from '../other-member-kyc/other-member-kyc-order-by-with-aggregation.input';
import { OtherMemberKYCScalarFieldEnum } from '../other-member-kyc/other-member-kyc-scalar-field.enum';
import { OtherMemberKYCScalarWhereWithAggregatesInput } from '../other-member-kyc/other-member-kyc-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByOtherMemberKycArgs {

    @Field(() => OtherMemberKYCWhereInput, {nullable:true})
    where?: OtherMemberKYCWhereInput;

    @Field(() => [OtherMemberKYCOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OtherMemberKYCOrderByWithAggregationInput>;

    @Field(() => [OtherMemberKYCScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OtherMemberKYCScalarFieldEnum>;

    @Field(() => OtherMemberKYCScalarWhereWithAggregatesInput, {nullable:true})
    having?: OtherMemberKYCScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
