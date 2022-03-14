import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { VisitCreateWithoutVisitedInput } from './visit-create-without-visited.input';

@InputType()
export class VisitCreateOrConnectWithoutVisitedInput {

    @Field(() => VisitWhereUniqueInput, {nullable:false})
    where!: VisitWhereUniqueInput;

    @Field(() => VisitCreateWithoutVisitedInput, {nullable:false})
    create!: VisitCreateWithoutVisitedInput;
}
