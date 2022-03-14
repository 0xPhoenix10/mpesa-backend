import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyCreateManyInput } from './verify-create-many.input';

@ArgsType()
export class CreateManyVerifyArgs {

    @Field(() => [VerifyCreateManyInput], {nullable:false})
    data!: Array<VerifyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
