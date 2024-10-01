import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'adam2tall', email: '2talladam@gmail.com', password: 'password' },
    { username: 'SunnyScribe', email: 'sunny@scribe.com', password: 'password' },
    { username: 'RadiantComet', email: 'radiant@comet.com', password: 'password' },
  ], { individualHooks: true });
};

