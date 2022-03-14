import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistUpdateInput } from './blacklist-update.input';
import { BlacklistWhereUniqueInput } from './blacklist-where-unique.input';

@ArgsType()
export class UpdateOneBlacklistArgs {

    @Field(() => BlacklistUpdateInput, {nullable:false})
    data!: BlacklistUpdateInput;

    @Field(() => BlacklistWhereUniqueInput, {nullable:false})
    where!: BlacklistWhereUniqueInput;
}
