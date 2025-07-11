import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

type UserWithoutPassword = Omit<User, 'password'>;
export class UserEntity implements UserWithoutPassword {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  telephone: string | null;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updateAt: Date;

  @ApiProperty()
  role: Role = 'USER';
}
