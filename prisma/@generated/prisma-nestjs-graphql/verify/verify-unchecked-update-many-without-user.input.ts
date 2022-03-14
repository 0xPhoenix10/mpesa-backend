import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifyCreateWithoutUserInput } from './verify-create-without-user.input';
import { VerifyCreateOrConnectWithoutUserInput } from './verify-create-or-connect-without-user.input';
import { VerifyUpsertWithWhereUniqueWithoutUserInput } from './verify-upsert-with-where-unique-without-user.input';
import { VerifyCreateManyUserInputEnvelope } from './verify-create-many-user-input-envelope.input';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';
import { VerifyUpdateWithWhereUniqueWithoutUserInput } from './verify-update-with-where-unique-without-user.input';
import { VerifyUpdateManyWithWhereWithoutUserInput } from './verify-update-many-with-where-without-user.input';
import { VerifyScalarWhereInput } from './verify-scalar-where.input';

@InputType()
export class VerifyUncheckedUpdateManyWithoutUserInput {

    @Field(() => [VerifyCreateWithoutUserInput], {nullable:true})
    create?: Array<VerifyCreateWithoutUserInput>;

    @Field(() => [VerifyCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<VerifyCreateOrConnectWithoutUserInput>;

    @Field(() => [VerifyUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<VerifyUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => VerifyCreateManyUserInputEnvelope, {nullable:true})
    createMany?: VerifyCreateManyUserInputEnvelope;

    @Field(() => [VerifyWhereUniqueInput], {nullable:true})
    set?: Array<VerifyWhereUniqueInput>;

    @Field(() => [VerifyWhereUniqueInput], {nullable:true})
    disconnect?: Array<VerifyWhereUniqueInput>;

    @Field(() => [VerifyWhereUniqueInput], {nullable:true})
    delete?: Array<VerifyWhereUniqueInput>;

    @Field(() => [VerifyWhereUniqueInput], {nullable:true})
    connect?: Array<VerifyWhereUniqueInput>;

    @Field(() => [VerifyUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<VerifyUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [VerifyUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<VerifyUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [VerifyScalarWhereInput], {nullable:true})
    deleteMany?: Array<VerifyScalarWhereInput>;
}
