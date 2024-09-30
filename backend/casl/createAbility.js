import { createMongoAbility } from '@casl/ability';

export const defineAbilityFor = (user) => {
  const { role } = user;

  // Define rules based on the user's role
  let rules = [];


    if (role === 'restaurantManager') {
    // Restaurant managers can manage their own restaurant
    rules = [
      { action: 'manage', subject: 'Order' },
      { action: 'read', subject: 'Pizza' }
    ];
  } else if (role === 'customer') {
    // Customers can only read pizzas and their own orders
    rules = [
      { action: 'read', subject: 'Pizza' },
      { action: 'manage', subject: 'Order', conditions: { userId: user.id } }
    ];
  }

  return createMongoAbility(rules);
};
