import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PhoneService } from './phone.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('Phone')
@ApiTags('Phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @ApiOperation({
    description: 'This end point create a new phone.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Post()
  create(@Body() createPhoneDto: CreatePhoneDto) {
    return this.phoneService.create(createPhoneDto);
  }

  @ApiOperation({
    description: 'This end point get all phones.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.phoneService.findAll();
  }

  @ApiOperation({
    description: 'This end point get one phone.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phoneService.findOne(+id);
  }

  @ApiOperation({
    description: 'This end point update the data values from one phone.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhoneDto: UpdatePhoneDto) {
    return this.phoneService.update(+id, updatePhoneDto);
  }

  @ApiOperation({
    description: 'This end point delete one phone.',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phoneService.remove(+id);
  }
}
