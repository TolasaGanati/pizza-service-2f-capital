
import { UserRole } from "@/utils/schema";
import { defineAbility } from '@casl/ability';

export default function defineAbilityFor(user) {
    return defineAbility((can) => {
        if (user?.role === UserRole.customer) {
            can("view", "order");
        }
        else if (user?.role === UserRole.restaurantManager) {
        can("view", "order"); 
        can("view", "addMenu");  
        can("view", "role");     
        can("view", "user");    
        }
      
        can("view", "order");  //for order
        can("view", "addMenu");  //add menu
        can("view", "role");     //role
        can("view", "user");      //user
    });
}

