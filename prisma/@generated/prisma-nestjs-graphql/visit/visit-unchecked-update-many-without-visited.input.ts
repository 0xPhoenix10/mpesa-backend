import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitCreateWithoutVisitedInput } from './visit-create-without-visited.input';
import { VisitCreateOrConnectWithoutVisitedInput } from './visit-create-or-connect-without-visited.input';
import { VisitUpsertWithWhereUniqueWithoutVisitedInput } from './visit-upsert-with-where-unique-without-visited.input';
import { VisitCreateManyVisitedInputEnvelope } from './visit-create-many-visited-input-envelope.input';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { VisitUpdateWithWhereUniqueWithoutVisitedInput } from './visit-update-with-where-unique-without-visited.input';
import { VisitUpdateManyWithWhereWithoutVisitedInput } from './visit-update-many-with-where-without-visited.input';
import { VisitScalarWhereInput } from './visit-scalar-where.input';

@InputType()
export class VisitUncheckedUpdateManyWithoutVisitedInput {

    @Field(() => [VisitCreateWithoutVisitedInput], {nullable:true})
    create?: Array<VisitCreateWithoutVisitedInput>;

    @Field(() => [VisitCreateOrConnectWithoutVisitedInput], {nullable:true})
    connectOrCreate?: Array<VisitCreateOrConnectWithoutVisitedInput>;

    @Field(() => [VisitUpsertWithWhereUniqueWithoutVisitedInput], {nullable:true})
    upsert?: Array<VisitUpsertWithWhereUniqueWithoutVisitedInput>;

    @Field(() => VisitCreateManyVisitedInputEnvelope, {nullable:true})
    createMany?: VisitCreateManyVisitedInputEnvelope;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    set?: Array<VisitWhereUniqueInput>;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    disconnect?: Array<VisitWhereUniqueInput>;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    delete?: Array<VisitWhereUniqueInput>;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    connect?: Array<VisitWhereUniqueInput>;

    @Field(() => [VisitUpdateWithWhereUniqueWithoutVisitedInput], {nullable:true})
    update?: Array<VisitUpdateWithWhereUniqueWithoutVisitedInput>;

    @Field(() => [VisitUpdateManyWithWhereWithoutVisitedInput], {nullable:true})
    updateMany?: Array<VisitUpdateManyWithWhereWithoutVisitedInput>;

    @Field(() => [VisitScalarWhereInput], {nullable:true})
    deleteMany?: Array<VisitScalarWhereInput>;
}
