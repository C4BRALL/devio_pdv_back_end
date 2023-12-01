import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module';
import { OrdersModule } from './orders/orders.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [PrismaModule, OrdersModule, HealthcheckModule],
})
export class AppModule {}
