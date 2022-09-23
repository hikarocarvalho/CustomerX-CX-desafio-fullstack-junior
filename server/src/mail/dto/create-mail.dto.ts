import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMailDto{
  @ApiProperty({
    description: 'Receive the name from the customer',
    example: 'Pedro Alcantara',
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Receive the customer Id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @ApiProperty({
    description: 'Receive the contact Id',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  contactId: number;

}
