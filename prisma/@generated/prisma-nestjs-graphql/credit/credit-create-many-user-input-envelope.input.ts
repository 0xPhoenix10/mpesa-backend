import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateManyUserInput } from './credit-create-many-user.input';

@InputType()
export class CreditCreateManyUserInputEnvelope {

    @Field(() => [CreditCreateManyUserInput], {nullable:false})
    data!: Array<CreditCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
