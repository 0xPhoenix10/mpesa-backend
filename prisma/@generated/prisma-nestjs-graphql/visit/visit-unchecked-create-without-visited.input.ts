import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VisitUncheckedCreateWithoutVisitedInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    visitedByReference?: string;

    @Field(() => Date, {nullable:true})
    whenVisitTookPlace?: Date | string;
}
