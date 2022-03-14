import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustCreateManyInput } from './trust-create-many.input';

@ArgsType()
export class CreateManyTrustArgs {

    @Field(() => [TrustCreateManyInput], {nullable:false})
    data!: Array<TrustCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
