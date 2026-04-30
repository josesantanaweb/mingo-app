import { Injectable, BadRequestException } from '@nestjs/common';
import { authenticator } from 'otplib';
import { PrismaService } from '@/prisma/prisma.service';
import type { OtpType } from '@mingo/database';

@Injectable()
export class OtpService {
  constructor(private readonly prisma: PrismaService) {}

  async sendEmailVerificationOtp(userId: string, email: string): Promise<void> {
    const code = this.generateNumericOtp();
    await this.storeOtp(userId, code, 'EMAIL_VERIFICATION');
    // TODO: integrate email provider (Nodemailer / Resend)
    console.log(`[OTP] Verification code for ${email}: ${code}`);
  }

  async sendPasswordResetOtp(userId: string, email: string): Promise<void> {
    const code = this.generateNumericOtp();
    await this.storeOtp(userId, code, 'PASSWORD_RESET');
    console.log(`[OTP] Password reset code for ${email}: ${code}`);
  }

  async verifyOtp(userId: string, code: string, type: OtpType): Promise<void> {
    const otp = await this.prisma.otpCode.findFirst({
      where: {
        userId,
        type,
        isUsed: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!otp || otp.code !== code) {
      throw new BadRequestException('Invalid or expired OTP');
    }

    await this.prisma.otpCode.update({
      where: { id: otp.id },
      data: { isUsed: true },
    });
  }

  generateTotpSecret(): string {
    return authenticator.generateSecret();
  }

  verifyTotp(token: string, secret: string): boolean {
    return authenticator.check(token, secret);
  }

  private generateNumericOtp(): string {
    return Math.floor(100_000 + Math.random() * 900_000).toString();
  }

  private async storeOtp(userId: string, code: string, type: OtpType): Promise<void> {
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10);

    await this.prisma.otpCode.updateMany({
      where: { userId, type, isUsed: false },
      data: { isUsed: true },
    });

    await this.prisma.otpCode.create({
      data: { userId, code, type, expiresAt },
    });
  }
}
