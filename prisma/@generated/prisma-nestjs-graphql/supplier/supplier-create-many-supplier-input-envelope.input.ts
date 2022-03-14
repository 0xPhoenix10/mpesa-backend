import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierCreateManySupplierInput } from './supplier-create-many-supplier.input';

@InputType()
export class SupplierCreateManySupplierInputEnvelope {

    @Field(() => [SupplierCreateManySupplierInput], {nullable:false})
    data!: Array<SupplierCreateManySupplierInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
