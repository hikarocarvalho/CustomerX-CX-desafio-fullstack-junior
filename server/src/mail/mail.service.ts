import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { Mail } from './entities/mail.entity';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class MailService {
  constructor(private readonly prisma: PrismaService) {}

  private mailResultData = {
    id: true,
    email: true,
    customerId:true,
    contactId:true,
    created_at: true,
    updated_at: true,
    deleted_at: true,
  };

  async create(createMailDto: CreateMailDto): Promise<Mail> {
    const data: Mail = { ...createMailDto}
    return this.prisma.dbMails
      .create({
        data
      })
      .catch(handleError);
  }

  async findAll(): Promise<Mail[]> {
    const mail = await this.prisma.dbMails.findMany({
      select: this.mailResultData,
      where: {
        deleted_at: null,
      },
    });

    if (!mail) {
      throw new NotFoundException('Any registered emails');
    }

    return mail;
  }
  async findOne(id: number): Promise<Mail> {
    const mail = await this.prisma.dbMails.findFirst({
      select: this.mailResultData,
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!mail) {
      throw new NotFoundException('The email with id = ' + id + ' not found!');
    }

    return mail;
  }

  async update(id: number, updateMailDto: UpdateMailDto): Promise<Mail> {
    const verifyMail = await this.prisma.dbMails.findUnique({ where: { id } });
    if (!verifyMail) {
      throw new NotFoundException('The email with id = ' + id + ' not found!');
    }

    return this.prisma.dbMails
      .update({
        select: this.mailResultData,
        data: {
          ...updateMailDto,
          updated_at: new Date(),
        },
        where: {
          id,
        },
      })
      .catch(handleError);
  }

  async remove(id: number): Promise<Mail> {
    const verifyMail = await this.prisma.dbMails.findUnique({ where: { id } });

    if (!verifyMail) {
      throw new NotFoundException('The email with id = ' + id + ' not found!');
    }

    return this.prisma.dbMails.update({
      select: this.mailResultData,
      data: {
        deleted_at: new Date(),
      },
      where: {
        id,
      },
    });
  }
}
