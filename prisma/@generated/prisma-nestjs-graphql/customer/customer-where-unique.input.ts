import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCustomerIdVendorIdCompoundUniqueInput } from './customer-customer-id-vendor-id-compound-unique.input';

@InputType()
export class CustomerWhereUniqueInput {

    @Field(() => CustomerCustomerIdVendorIdCompoundUniqueInput, {nullable:true})
    customerId_vendorId?: CustomerCustomerIdVendorIdCompoundUniqueInput;
}
