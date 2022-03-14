import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OtherMemberKYCCreateManyCreatedByInput } from './other-member-kyc-create-many-created-by.input';

@InputType()
export class OtherMemberKYCCreateManyCreatedByInputEnvelope {

    @Field(() => [OtherMemberKYCCreateManyCreatedByInput], {nullable:false})
    data!: Array<OtherMemberKYCCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
