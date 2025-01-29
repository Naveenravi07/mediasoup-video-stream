import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MeetModule } from './meet/meet.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    MeetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
