import {
  Model,
  // Association,
  DataTypes,
  // HasManyCreateAssociationMixin,
} from 'sequelize';

import { sequelize } from './index';

class TestUser extends Model {
  public id!: number;
  public lastName!: string;
  public firstName!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // public readonly messages?: Message[];

  // public createMessage!: HasManyCreateAssociationMixin<Message>;

  // public static findByEmail: (email: string) => Promise<User | null>;
  // public validatePassword!: (password: string) => Promise<boolean>;

  // public static associations: {
  //   messages: Association<User, Message>;
  // };
}

// const generatePasswordHash = async (user: User): Promise<string> => {
//   const saltRounds = 10;
//   return await bcrypt.hash(user.password, saltRounds);
// };

TestUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'test_users',
    sequelize: sequelize,
    // hooks: {
    //   beforeCreate: async user => {
    //     user.set('password', await generatePasswordHash(user));
    //   },
    // },
  },
);

// User.hasMany(Message, {
//   sourceKey: 'id',
//   foreignKey: 'userId',
//   as: 'messages',
// });

// User.findByEmail = async (email: string) =>
//   User.findOne({
//     where: { email },
//   });

// User.prototype.validatePassword = async function(password: string) {
//   return await bcrypt.compare(password, this.password);
// };

export default TestUser;
