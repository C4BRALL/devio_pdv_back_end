/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePdvDto } from './dto/create-pdv.dto';
import { UpdatePdvDto } from './dto/update-pdv.dto';
import { ListProductsRepository } from './repositories/protocols/list-products-repository';

@Injectable()
export class PdvService {
  constructor(
    private readonly listProductsRepository: ListProductsRepository,
  ) {}

  create(createPdvDto: CreatePdvDto) {
    return 'This action adds a new api';
  }

  listPorducts(
    params: ListProductsRepository.Params,
  ): Promise<ListProductsRepository.Result> {
    try {
      return this.listProductsRepository.findAll(params);
    } catch (error) {
      return error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} api`;
  }

  update(id: number, updatePdvDto: UpdatePdvDto) {
    return `This action updates a #${id} api`;
  }

  remove(id: number) {
    return `This action removes a #${id} api`;
  }
}
