import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityCreateManyInput } from './activity-create-many.input';

@ArgsType()
export class CreateManyActivityArgs {

    @Field(() => [ActivityCreateManyInput], {nullable:false})
    data!: Array<ActivityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
