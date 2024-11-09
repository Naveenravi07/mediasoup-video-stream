import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStratergy } from './local.stratergy';
import { PassportModule } from "@nestjs/passport"
import { AuthController } from "./auth.controller"
import { LocalAuthGuard } from './local-auth.gurad';
import { SessionSerializer } from './session-serializer';

@Module({
    imports: [forwardRef(() => UsersModule), PassportModule.register({ session: true })],
    providers: [AuthService, LocalStratergy, LocalAuthGuard, SessionSerializer],
    controllers: [AuthController]
})

export class AuthModule { }