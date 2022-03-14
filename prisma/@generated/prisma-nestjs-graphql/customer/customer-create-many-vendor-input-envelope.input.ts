import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateManyVendorInput } from './customer-create-many-vendor.input';

@InputType()
export class CustomerCreateManyVendorInputEnvelope {

    @Field(() => [CustomerCreateManyVendorInput], {nullable:false})
    data!: Array<CustomerCreateManyVendorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
