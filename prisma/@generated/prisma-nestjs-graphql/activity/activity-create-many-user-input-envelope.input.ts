import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityCreateManyUserInput } from './activity-create-many-user.input';

@InputType()
export class ActivityCreateManyUserInputEnvelope {

    @Field(() => [ActivityCreateManyUserInput], {nullable:false})
    data!: Array<ActivityCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
