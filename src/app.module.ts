import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DocumentModule } from './document/document.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    // MulterModule.register({
    //   dest: './output',
    // }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      context: ({ req }) => ({ req }),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      introspection: true,
      driver: ApolloDriver,
      debug: true,
      playground: true,
    }),
    DocumentModule,
  ],
  providers: [],
})
export class AppModule { }
