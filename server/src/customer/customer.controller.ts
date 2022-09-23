import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('customer')
@ApiTags('Customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({
    description: 'This end point create a new customer.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto , @LoggedUser() user: User) {
    return this.customerService.create(createCustomerDto, user);
  }

  @ApiOperation({
    description: 'This end point get all customers.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get()
  findAll(@LoggedUser() user: User) {
    return this.customerService.findAll(user);
  }

  @ApiOperation({
    description: 'This end point get one customer.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({
    description: 'This end point update the data values from one customer.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation({
    description: 'This end point delete one customer.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
