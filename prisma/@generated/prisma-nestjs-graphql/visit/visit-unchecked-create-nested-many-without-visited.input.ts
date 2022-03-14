import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitCreateWithoutVisitedInput } from './visit-create-without-visited.input';
import { VisitCreateOrConnectWithoutVisitedInput } from './visit-create-or-connect-without-visited.input';
import { VisitCreateManyVisitedInputEnvelope } from './visit-create-many-visited-input-envelope.input';
import { VisitWhereUniqueInput } from './visit-where-unique.input';

@InputType()
export class VisitUncheckedCreateNestedManyWithoutVisitedInput {

    @Field(() => [VisitCreateWithoutVisitedInput], {nullable:true})
    create?: Array<VisitCreateWithoutVisitedInput>;

    @Field(() => [VisitCreateOrConnectWithoutVisitedInput], {nullable:true})
    connectOrCreate?: Array<VisitCreateOrConnectWithoutVisitedInput>;

    @Field(() => VisitCreateManyVisitedInputEnvelope, {nullable:true})
    createMany?: VisitCreateManyVisitedInputEnvelope;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    connect?: Array<VisitWhereUniqueInput>;
}
