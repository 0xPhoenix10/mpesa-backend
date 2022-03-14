import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistWhereInput } from './blacklist-where.input';

@ArgsType()
export class DeleteManyBlacklistArgs {

    @Field(() => BlacklistWhereInput, {nullable:true})
    where?: BlacklistWhereInput;
}
