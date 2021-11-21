import {BaseEntity, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn} from "typeorm";

export class CustomBaseEntity  extends BaseEntity {
  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt: Date;

  @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  public setUpdateDate(): void {
    this.updatedAt = new Date();
  }
}