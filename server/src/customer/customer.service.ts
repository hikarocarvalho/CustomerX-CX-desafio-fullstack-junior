import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { handleError } from 'src/utils/handle-error.util';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService,private readonly jwtService: JwtService,) {
  }

  private customerResultData = {
    id: true,
    complete_name: true,
    userId: true,
    mails: true,
    phones:true,
    created_at: true,
    updated_at: true,
    deleted_at: true,
  };

  async create(createCustomerDto: CreateCustomerDto, user: User): Promise<Customer> {
    const data: Customer = { 
      ...createCustomerDto,
      userId: user.id,
    }
    return this.prisma.dbCustomers
      .create({
        data
      })
      .catch(handleError);
  }

  async findAll(user: User): Promise<Customer[]> {
    const customers = await this.prisma.dbCustomers.findMany({
      select: {
        ...this.customerResultData,
      },
      where: {
        userId: user.id,
        deleted_at: null,
      },
    });

    if (!customers) {
      throw new NotFoundException('Any registered customers');
    }

    return customers;
  }
  async findOne(id: number): Promise<Customer> {
    const customer = await this.prisma.dbCustomers.findFirst({
      select: this.customerResultData,
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!customer) {
      throw new NotFoundException('The customer with id = ' + id + ' not found!');
    }

    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const verifyCustomer = await this.prisma.dbCustomers.findUnique({ where: { id } });
    if (!verifyCustomer) {
      throw new NotFoundException('The customer with id = ' + id + ' not found!');
    }

    return this.prisma.dbCustomers
      .update({
        select: this.customerResultData,
        data: {
          ...updateCustomerDto,
          updated_at: new Date(),
        },
        where: {
          id,
        },
      })
      .catch(handleError);
  }

  async remove(id: number): Promise<Customer> {
    const verifyCustomer = await this.prisma.dbCustomers.findUnique({ where: { id } });

    if (!verifyCustomer) {
      throw new NotFoundException('The customer with id = ' + id + ' not found!');
    }

    return this.prisma.dbCustomers.update({
      select: this.customerResultData,
      data: {
        deleted_at: new Date(),
      },
      where: {
        id,
      },
    });
  }
}
