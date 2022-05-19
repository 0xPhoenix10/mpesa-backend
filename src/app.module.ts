import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DocumentModule } from './document/document.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { QueueModule } from './queue/queue.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
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
    QueueModule,
    StatsModule,
  ],
  providers: [],
})
export class AppModule { }
