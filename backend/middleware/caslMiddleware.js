import { defineAbilityFor } from "../casl/createAbility.js";

export function authorize(action, subject) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized, user not found" });
    }

    const ability = defineAbilityFor(req.user);

    if (ability.can(action, subject)) {
      return next();
    } else {
      return res.status(403).json({ message: "Unauthorized, access denied" });
    }
  };
}
