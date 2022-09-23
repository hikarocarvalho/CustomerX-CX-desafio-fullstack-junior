import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { MailModule } from './mail/mail.module';
import { PhoneModule } from './phone/phone.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, CustomerModule, ContactModule, MailModule, PhoneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
