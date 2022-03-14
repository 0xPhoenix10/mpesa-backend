import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateWithoutUserInput } from './activity-create-without-user.input';
import { ActivityCreateOrConnectWithoutUserInput } from './activity-create-or-connect-without-user.input';
import { ActivityCreateManyUserInputEnvelope } from './activity-create-many-user-input-envelope.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';

@InputType()
export class ActivityUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ActivityCreateWithoutUserInput], {nullable:true})
    create?: Array<ActivityCreateWithoutUserInput>;

    @Field(() => [ActivityCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ActivityCreateOrConnectWithoutUserInput>;

    @Field(() => ActivityCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ActivityCreateManyUserInputEnvelope;

    @Field(() => [ActivityWhereUniqueInput], {nullable:true})
    connect?: Array<ActivityWhereUniqueInput>;
}
