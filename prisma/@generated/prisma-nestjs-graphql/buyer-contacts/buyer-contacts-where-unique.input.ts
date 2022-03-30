import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BuyerContactsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
