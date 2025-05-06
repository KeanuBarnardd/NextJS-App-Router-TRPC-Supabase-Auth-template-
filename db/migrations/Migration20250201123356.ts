import { Migration } from '@mikro-orm/migrations';

export class Migration20250201123356 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "todo" ("id" serial primary key, "title" varchar(255) not null, "completed" boolean not null default false, "created_at" timestamptz not null, "updated_at" timestamptz not null);`);
  }

}
