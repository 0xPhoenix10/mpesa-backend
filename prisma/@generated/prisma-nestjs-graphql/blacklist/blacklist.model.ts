import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Blacklist {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    taxId!: string | null;

    @Field(() => String, {nullable:true})
    documentId!: string | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;
}
