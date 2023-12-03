import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PdvService } from '../pdv.service';
import { CreatePdvDto } from '../dto/create-pdv.dto';
import { UpdatePdvDto } from '../dto/update-pdv.dto';

@Controller('products')
export class PdvController {
  constructor(private readonly pdvService: PdvService) {}

  @Post()
  create(@Body() createPdvDto: CreatePdvDto) {
    return this.pdvService.create(createPdvDto);
  }

  @Get()
  allProducts(@Query('take') take?: number, @Query('skip') skip?: number) {
    try {
      return this.pdvService.listPorducts({
        take: Number(take),
        skip: Number(skip),
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePdvDto: UpdatePdvDto) {
    return this.pdvService.update(+id, updatePdvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pdvService.remove(+id);
  }
}
