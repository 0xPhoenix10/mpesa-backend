import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifyCreateWithoutUserInput } from './verify-create-without-user.input';
import { VerifyCreateOrConnectWithoutUserInput } from './verify-create-or-connect-without-user.input';
import { VerifyCreateManyUserInputEnvelope } from './verify-create-many-user-input-envelope.input';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';

@InputType()
export class VerifyCreateNestedManyWithoutUserInput {

    @Field(() => [VerifyCreateWithoutUserInput], {nullable:true})
    create?: Array<VerifyCreateWithoutUserInput>;

    @Field(() => [VerifyCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<VerifyCreateOrConnectWithoutUserInput>;

    @Field(() => VerifyCreateManyUserInputEnvelope, {nullable:true})
    createMany?: VerifyCreateManyUserInputEnvelope;

    @Field(() => [VerifyWhereUniqueInput], {nullable:true})
    connect?: Array<VerifyWhereUniqueInput>;
}
