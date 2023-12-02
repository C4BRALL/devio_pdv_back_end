import { Module } from '@nestjs/common';
import { PdvService } from './pdv.service';

@Module({
  providers: [PdvService],
})
export class PdvModule {}
