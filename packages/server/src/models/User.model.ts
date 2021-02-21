import { UUIDV4 } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { isFullName } from '@my-template/shared';

const { STRING, UUID, CITEXT, ENUM } = DataType;

@Table
class User extends Model {
  @Column({
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: CITEXT,
    unique: true,
    validate: {
      isEmail: true,
      min: 6,
      max: 320,
    },
  })
  email: string;

  @Column({
    type: STRING,
    allowNull: false,
    validate: {
      is: isFullName,
    },
  })
  fullName: string;

  @Column({
    type: STRING,
    allowNull: false,
    validate: {
      min: 64,
      max: 255,
    },
  })
  password: string;

  @Column({
    type: ENUM(`user`, `admin`),
    defaultValue: `user`,
  })
  role: string;

  @Column({
    type: UUID,
    defaultValue: UUIDV4,
  })
  tokenVersion: string;
}

export default User;
