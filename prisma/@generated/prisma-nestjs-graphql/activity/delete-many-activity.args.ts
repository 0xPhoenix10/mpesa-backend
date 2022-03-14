import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityWhereInput } from './activity-where.input';

@ArgsType()
export class DeleteManyActivityArgs {

    @Field(() => ActivityWhereInput, {nullable:true})
    where?: ActivityWhereInput;
}
