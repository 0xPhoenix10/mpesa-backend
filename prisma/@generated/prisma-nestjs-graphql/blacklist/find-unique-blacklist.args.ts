import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistWhereUniqueInput } from './blacklist-where-unique.input';

@ArgsType()
export class FindUniqueBlacklistArgs {

    @Field(() => BlacklistWhereUniqueInput, {nullable:false})
    where!: BlacklistWhereUniqueInput;
}
