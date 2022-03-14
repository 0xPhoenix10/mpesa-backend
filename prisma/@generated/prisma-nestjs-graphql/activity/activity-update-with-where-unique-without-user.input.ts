import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { ActivityUpdateWithoutUserInput } from './activity-update-without-user.input';

@InputType()
export class ActivityUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    where!: ActivityWhereUniqueInput;

    @Field(() => ActivityUpdateWithoutUserInput, {nullable:false})
    data!: ActivityUpdateWithoutUserInput;
}
