import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrustWhereUniqueInput {

    @Field(() => String, {nullable:true})
    account?: string;
}
