import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { Phone } from './entities/phone.entity';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class PhoneService {
  constructor(private readonly prisma: PrismaService) {}

  private phoneResultData = {
    id: true,
    phone: true,
    customerId: true,
    contactId:true,
    created_at: true,
    updated_at: true,
    deleted_at: true,
  };

  async create(createPhoneDto: CreatePhoneDto): Promise<Phone> {
    const data: Phone = { ...createPhoneDto}
    return this.prisma.dbPhones
      .create({
        data
      })
      .catch(handleError);
  }

  async findAll(): Promise<Phone[]> {
    const phones = await this.prisma.dbPhones.findMany({
      select: this.phoneResultData,
      where: {
        deleted_at: null,
      },
    });

    if (!phones) {
      throw new NotFoundException('Any registered phones');
    }

    return phones;
  }
  async findOne(id: number): Promise<Phone> {
    const phone = await this.prisma.dbPhones.findFirst({
      select: this.phoneResultData,
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!phone) {
      throw new NotFoundException('The phone with id = ' + id + ' not found!');
    }

    return phone;
  }

  async update(id: number, updatePhoneDto: UpdatePhoneDto): Promise<Phone> {
    const verifyPhone = await this.prisma.dbPhones.findUnique({ where: { id } });
    if (!verifyPhone) {
      throw new NotFoundException('The phone with id = ' + id + ' not found!');
    }

    return this.prisma.dbPhones
      .update({
        select: this.phoneResultData,
        data: {
          ...updatePhoneDto,
          updated_at: new Date(),
        },
        where: {
          id,
        },
      })
      .catch(handleError);
  }

  async remove(id: number): Promise<Phone> {
    const verifyPhone = await this.prisma.dbPhones.findUnique({ where: { id } });

    if (!verifyPhone) {
      throw new NotFoundException('The phone with id = ' + id + ' not found!');
    }

    return this.prisma.dbPhones.update({
      select: this.phoneResultData,
      data: {
        deleted_at: new Date(),
      },
      where: {
        id,
      },
    });
  }
}
