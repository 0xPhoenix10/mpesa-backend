import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityCreateInput } from './activity-create.input';

@ArgsType()
export class CreateOneActivityArgs {

    @Field(() => ActivityCreateInput, {nullable:false})
    data!: ActivityCreateInput;
}
