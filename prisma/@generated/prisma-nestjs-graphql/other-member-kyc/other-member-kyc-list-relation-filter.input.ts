import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherMemberKYCWhereInput } from './other-member-kyc-where.input';

@InputType()
export class OtherMemberKYCListRelationFilter {

    @Field(() => OtherMemberKYCWhereInput, {nullable:true})
    every?: OtherMemberKYCWhereInput;

    @Field(() => OtherMemberKYCWhereInput, {nullable:true})
    some?: OtherMemberKYCWhereInput;

    @Field(() => OtherMemberKYCWhereInput, {nullable:true})
    none?: OtherMemberKYCWhereInput;
}
