import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthService } from '@/modules/auth/auth.service';
import { RegisterInput } from '@/modules/auth/dto/register.input';
import { LoginInput } from '@/modules/auth/dto/login.input';
import { VerifyEmailInput } from '@/modules/auth/dto/verify-email.input';
import { RefreshTokenInput } from '@/modules/auth/dto/refresh-token.input';
import { AuthResponse } from '@/modules/auth/entities/auth.entity';
import { MessageResponse } from '@/modules/auth/entities/message.entity';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import type { User } from '@/modules/users/entities/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => MessageResponse)
  async register(@Args('input') input: RegisterInput): Promise<MessageResponse> {
    return this.authService.register(input);
  }

  @Mutation(() => AuthResponse)
  async login(@Args('input') input: LoginInput): Promise<AuthResponse> {
    return this.authService.login(input) as Promise<AuthResponse>;
  }

  @Mutation(() => AuthResponse)
  async refreshTokens(@Args('input') input: RefreshTokenInput): Promise<AuthResponse> {
    return this.authService.refreshTokens(input.refreshToken);
  }

  @Mutation(() => MessageResponse)
  async verifyEmail(@Args('input') input: VerifyEmailInput): Promise<MessageResponse> {
    return this.authService.verifyEmail(input.userId, input.code);
  }

  @Mutation(() => MessageResponse)
  @UseGuards(JwtAuthGuard)
  async logout(
    @CurrentUser() user: User,
    @Context() _ctx: unknown,
  ): Promise<MessageResponse> {
    return this.authService.logout(user.id);
  }
}
