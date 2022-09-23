import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePhoneDto{
  @ApiProperty({
    description: 'Receive the name from the phone',
    example: 'Pedro Alcantara',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;
  
  @ApiProperty({
    description: 'Receive the customerId',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @ApiProperty({
    description: 'Receive the contact Id',
    example: '1',
  })
  @IsNumber()
  contactId: number;

}
