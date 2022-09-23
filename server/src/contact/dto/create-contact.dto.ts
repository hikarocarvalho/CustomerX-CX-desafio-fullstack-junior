import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContactDto{
  @ApiProperty({
    description: 'Receive the name from the contact',
    example: 'Pedro Alcantara',
  })
  @IsNotEmpty()
  @IsString()
  complete_name: string;
  
  @ApiProperty({
    description: 'Receive the UserId',
    example: '1',
  })
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

}
