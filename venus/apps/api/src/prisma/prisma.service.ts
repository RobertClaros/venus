import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../../../packages/database/generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({});
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Prisma Client: Conexión exitosa a la base de datos.');
    } catch (error) {
      console.error(
        'Prisma Client: Error al conectar con la base de datos:',
        error.message,
      );
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('Prisma Client: Conexión cerrada.');
  }
}
