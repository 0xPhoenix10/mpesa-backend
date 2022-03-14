import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { ActivityUpdateWithoutUserInput } from './activity-update-without-user.input';
import { ActivityCreateWithoutUserInput } from './activity-create-without-user.input';

@InputType()
export class ActivityUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    where!: ActivityWhereUniqueInput;

    @Field(() => ActivityUpdateWithoutUserInput, {nullable:false})
    update!: ActivityUpdateWithoutUserInput;

    @Field(() => ActivityCreateWithoutUserInput, {nullable:false})
    create!: ActivityCreateWithoutUserInput;
}
