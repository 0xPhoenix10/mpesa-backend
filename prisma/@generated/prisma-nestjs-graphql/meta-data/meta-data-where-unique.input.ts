import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MetaDataWhereUniqueInput {

    @Field(() => String, {nullable:true})
    walletAccount?: string;
}
