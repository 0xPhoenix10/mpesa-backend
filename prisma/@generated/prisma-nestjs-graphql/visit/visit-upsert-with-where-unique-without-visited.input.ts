import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { VisitUpdateWithoutVisitedInput } from './visit-update-without-visited.input';
import { VisitCreateWithoutVisitedInput } from './visit-create-without-visited.input';

@InputType()
export class VisitUpsertWithWhereUniqueWithoutVisitedInput {

    @Field(() => VisitWhereUniqueInput, {nullable:false})
    where!: VisitWhereUniqueInput;

    @Field(() => VisitUpdateWithoutVisitedInput, {nullable:false})
    update!: VisitUpdateWithoutVisitedInput;

    @Field(() => VisitCreateWithoutVisitedInput, {nullable:false})
    create!: VisitCreateWithoutVisitedInput;
}
