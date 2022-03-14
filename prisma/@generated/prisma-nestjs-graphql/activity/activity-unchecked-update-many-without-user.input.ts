import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateWithoutUserInput } from './activity-create-without-user.input';
import { ActivityCreateOrConnectWithoutUserInput } from './activity-create-or-connect-without-user.input';
import { ActivityUpsertWithWhereUniqueWithoutUserInput } from './activity-upsert-with-where-unique-without-user.input';
import { ActivityCreateManyUserInputEnvelope } from './activity-create-many-user-input-envelope.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { ActivityUpdateWithWhereUniqueWithoutUserInput } from './activity-update-with-where-unique-without-user.input';
import { ActivityUpdateManyWithWhereWithoutUserInput } from './activity-update-many-with-where-without-user.input';
import { ActivityScalarWhereInput } from './activity-scalar-where.input';

@InputType()
export class ActivityUncheckedUpdateManyWithoutUserInput {

    @Field(() => [ActivityCreateWithoutUserInput], {nullable:true})
    create?: Array<ActivityCreateWithoutUserInput>;

    @Field(() => [ActivityCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ActivityCreateOrConnectWithoutUserInput>;

    @Field(() => [ActivityUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ActivityUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ActivityCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ActivityCreateManyUserInputEnvelope;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    set?: Array<ActivityWhereUniqueInput>;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    disconnect?: Array<ActivityWhereUniqueInput>;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    delete?: Array<ActivityWhereUniqueInput>;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    connect?: Array<ActivityWhereUniqueInput>;

    @Field(() => [ActivityUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ActivityUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ActivityUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ActivityUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ActivityScalarWhereInput], {nullable:true})
    deleteMany?: Array<ActivityScalarWhereInput>;
}
