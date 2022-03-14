import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettingsCountAggregate } from './settings-count-aggregate.output';
import { SettingsMinAggregate } from './settings-min-aggregate.output';
import { SettingsMaxAggregate } from './settings-max-aggregate.output';

@ObjectType()
export class SettingsGroupBy {

    @Field(() => String, {nullable:true})
    woocommerceUrl?: string;

    @Field(() => String, {nullable:true})
    woocommerceConsumerKey?: string;

    @Field(() => Boolean, {nullable:true})
    woocommerceActive?: boolean;

    @Field(() => String, {nullable:true})
    woocommerceConsumerSecret?: string;

    @Field(() => String, {nullable:false})
    walletAccount!: string;

    @Field(() => SettingsCountAggregate, {nullable:true})
    _count?: SettingsCountAggregate;

    @Field(() => SettingsMinAggregate, {nullable:true})
    _min?: SettingsMinAggregate;

    @Field(() => SettingsMaxAggregate, {nullable:true})
    _max?: SettingsMaxAggregate;
}
