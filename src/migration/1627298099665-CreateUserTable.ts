import {MigrationInterface, QueryRunner, Table} from "typeorm";
import BaseMigration from "../common/base.migration";

export class CreateUserTable1627298099665 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "firstName",
                    type: "varchar",
                },
                {
                    name: 'lastName',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'age',
                    type: 'int'
                },
                ...BaseMigration
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
