import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRegistrationDate1714208844706 implements MigrationInterface {
  private readonly logger = new Logger(UserRegistrationDate1714208844706.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    await queryRunner.query('UPDATE user SET admin = false');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Down');
    await queryRunner.query('UPDATE user SET admin = true');
  }
}
