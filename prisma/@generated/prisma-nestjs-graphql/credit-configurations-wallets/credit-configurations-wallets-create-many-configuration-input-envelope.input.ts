import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsCreateManyConfigurationInput } from './credit-configurations-wallets-create-many-configuration.input';

@InputType()
export class CreditConfigurationsWalletsCreateManyConfigurationInputEnvelope {

    @Field(() => [CreditConfigurationsWalletsCreateManyConfigurationInput], {nullable:false})
    data!: Array<CreditConfigurationsWalletsCreateManyConfigurationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
