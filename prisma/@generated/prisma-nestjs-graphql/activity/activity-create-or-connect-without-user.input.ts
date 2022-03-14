import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { ActivityCreateWithoutUserInput } from './activity-create-without-user.input';

@InputType()
export class ActivityCreateOrConnectWithoutUserInput {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    where!: ActivityWhereUniqueInput;

    @Field(() => ActivityCreateWithoutUserInput, {nullable:false})
    create!: ActivityCreateWithoutUserInput;
}
