'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        firstname: 'Alice',
        lastname: 'Doe',
        pic: 'https://images.unsplash.com/photo-1511424187101-2aaa60069357?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Chealsea',
        lastname: 'Smith',
        pic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Charlie',
        lastname: 'Brown',
        pic: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Diana',
        lastname: 'Johnson',
        pic: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Eve',
        lastname: 'White',
        pic: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Frank',
        lastname: 'Taylor',
        pic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Grace',
        lastname: 'Wilson',
        pic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Henry',
        lastname: 'Martinez',
        pic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Isabel',
        lastname: 'Garcia',
        pic: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Jack',
        lastname: 'Lopez',
        pic: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Karen',
        lastname: 'Clark',
        pic: 'https://images.unsplash.com/photo-1568038479111-87bf80659645?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Liam',
        lastname: 'Rodriguez',
        pic: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Mia',
        lastname: 'Lewis',
        pic: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Noah',
        lastname: 'Walker',
        pic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Olivia',
        lastname: 'Hall',
        pic: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Paul',
        lastname: 'Allen',
        pic: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Quinn',
        lastname: 'Young',
        pic: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Ruby',
        lastname: 'Hernandez',
        pic: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Sam',
        lastname: 'King',
        pic: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Tina',
        lastname: 'Wright',
        pic: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?crop=entropy&cs=tinysrgb&w=800',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
