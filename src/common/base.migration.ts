import {TableColumnOptions} from "typeorm/schema-builder/options/TableColumnOptions";

const BaseMigration: TableColumnOptions[] = [
  {
    name: 'created_at',
    type: 'timestamp',
    isNullable: false
  },
  {
    name: 'updated_at',
    type: 'timestamp',
    isNullable: true
  }
]

export default BaseMigration;