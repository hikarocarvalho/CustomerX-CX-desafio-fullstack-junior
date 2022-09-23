import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { handleError } from 'src/utils/handle-error.util';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService,private readonly jwtService: JwtService,) {
  }

  private contactResultData = {
    id: true,
    complete_name: true,
    customerId: true,
    mails: true,
    phones:true,
    created_at: true,
    updated_at: true,
    deleted_at: true,
  };

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    const data: Contact = { 
      ...createContactDto,
    }
    return this.prisma.dbContacts
      .create({
        data
      })
      .catch(handleError);
  }

  async findAll(id: number): Promise<Contact[]> {
    const contacts = await this.prisma.dbContacts.findMany({
      select: this.contactResultData,
      where: {
        deleted_at: null,
      },
    });

    if (!contacts) {
      throw new NotFoundException('Any registered contacts');
    }

    return contacts;
  }
  async findOne(id: number): Promise<Contact> {
    const contact = await this.prisma.dbContacts.findFirst({
      select: this.contactResultData,
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!contact) {
      throw new NotFoundException('The contact with id = ' + id + ' not found!');
    }

    return contact;
  }

  async update(id: number, updateContactDto: UpdateContactDto): Promise<Contact> {
    const verifyContact = await this.prisma.dbContacts.findUnique({ where: { id } });
    if (!verifyContact) {
      throw new NotFoundException('The contact with id = ' + id + ' not found!');
    }

    return this.prisma.dbContacts
      .update({
        select: this.contactResultData,
        data: {
          ...updateContactDto,
          updated_at: new Date(),
        },
        where: {
          id,
        },
      })
      .catch(handleError);
  }

  async remove(id: number): Promise<Contact> {
    const verifyContact = await this.prisma.dbContacts.findUnique({ where: { id } });

    if (!verifyContact) {
      throw new NotFoundException('The contact with id = ' + id + ' not found!');
    }

    return this.prisma.dbContacts.update({
      select: this.contactResultData,
      data: {
        deleted_at: new Date(),
      },
      where: {
        id,
      },
    });
  }
}
