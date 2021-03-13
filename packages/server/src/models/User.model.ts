import { UUIDV4 } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { emailMax, emailMin, isName } from '@my-template/shared';

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
    allowNull: false,
    type: CITEXT,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
      min: emailMin,
      max: emailMax,
    },
  })
  email: string;

  @Column({
    allowNull: false,
    type: STRING,
    validate: {
      notEmpty: true,
      min: 64,
      max: 255,
    },
  })
  securityQuestion: string;

  @Column({
    allowNull: false,
    type: STRING,
    validate: {
      notEmpty: true,
      min: 64,
      max: 255,
    },
  })
  securityAnswer: string;

  @Column({
    allowNull: false,
    type: STRING,
    validate: {
      notEmpty: true,
      is: isName,
    },
  })
  firstName: string;

  @Column({
    allowNull: false,
    type: STRING,
    validate: {
      notEmpty: true,
      is: isName,
    },
  })
  lastName: string;

  @Column({
    allowNull: false,
    type: STRING,
    validate: {
      notEmpty: true,
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
