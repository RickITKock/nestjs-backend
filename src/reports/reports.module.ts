import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './ReportsController';
import { Report } from './report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
  providers: [ReportsService],
  controllers: [ReportsController]
})
export class ReportsModule {}
