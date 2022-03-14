import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';

@ArgsType()
export class DeleteOneActivityArgs {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    where!: ActivityWhereUniqueInput;
}
