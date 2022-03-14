import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActivityWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
