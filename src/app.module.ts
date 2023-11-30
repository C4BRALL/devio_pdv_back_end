import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './config/prisma/prisma.module';
import { HealthcheckController } from './controllers/healthcheck.controller';

@Module({
  imports: [PrismaModule],
  controllers: [HealthcheckController],
  providers: [AppService],
})
export class AppModule {}
