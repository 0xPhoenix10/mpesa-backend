import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OtherMemberKYCCountAggregate } from './other-member-kyc-count-aggregate.output';
import { OtherMemberKYCMinAggregate } from './other-member-kyc-min-aggregate.output';
import { OtherMemberKYCMaxAggregate } from './other-member-kyc-max-aggregate.output';

@ObjectType()
export class AggregateOtherMemberKYC {

    @Field(() => OtherMemberKYCCountAggregate, {nullable:true})
    _count?: OtherMemberKYCCountAggregate;

    @Field(() => OtherMemberKYCMinAggregate, {nullable:true})
    _min?: OtherMemberKYCMinAggregate;

    @Field(() => OtherMemberKYCMaxAggregate, {nullable:true})
    _max?: OtherMemberKYCMaxAggregate;
}
