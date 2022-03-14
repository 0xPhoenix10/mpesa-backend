import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistCreateManyInput } from './blacklist-create-many.input';

@ArgsType()
export class CreateManyBlacklistArgs {

    @Field(() => [BlacklistCreateManyInput], {nullable:false})
    data!: Array<BlacklistCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
