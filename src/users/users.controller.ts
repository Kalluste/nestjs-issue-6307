import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {

  constructor(
  ) {
    console.log('Initializing users controller');
  }

  @Get(':uuid')
  getUser(
    @Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string,
  ): Promise<any> {
    console.log('getting user')
    return null;
  }

  @Get('profile')
  async getProfile(
  ): Promise<any> {
    console.log('getting profile');
    return null;
  }
}
