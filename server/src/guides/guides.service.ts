import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Guide } from './models/guide.model';
import { CreateGuideDto } from './dto/create-guide.dto';

@Injectable()
export class GuidesService {
  constructor(
    @InjectModel(Guide)
    private guideModel: typeof Guide,
  ) {}

  mockGuides = [
    {
      firstname: 'Aragorn',
      lastname: '',
      about: 'Some info about guide',
      phone: '+0000000000',
    },
    {
      firstname: 'Gimli',
      lastname: '',
      about: 'Some info about guide',
      phone: '+0000000000',
    },
    {
      firstname: 'Legolas',
      lastname: '',
      about: 'Some info about guide',
      phone: '+0000000000',
    },
    {
      firstname: 'Gandalf',
      lastname: '',
      about: 'Some info about guide',
      phone: '+0000000000',
    },
  ];

  async findOne(id: number) {
    try {
      return await this.guideModel.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException('fail to find guide.', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const guides = await this.guideModel.findAll();
      if (!guides.length) {
        // TODO: delete mockes; create guides in admin panel
        this.guideModel.bulkCreate([...this.mockGuides]);
      }
      return guides;
    } catch (error) {
      throw new HttpException('Fail to find guides', HttpStatus.BAD_REQUEST);
    }
  }

  async createGuide(createGuideDto: CreateGuideDto) {
    await this.guideModel.create({ ...createGuideDto });
  }
}
