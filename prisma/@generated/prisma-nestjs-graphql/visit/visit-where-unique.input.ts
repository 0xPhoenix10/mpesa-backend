import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VisitWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
