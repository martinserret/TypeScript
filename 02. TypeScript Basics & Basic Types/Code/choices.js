var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
;
var userRole = Role.Admin; // or userRole: Role = 0 (or 1 and 2) but less explicit
// ...
userRole = Role.Guest;
var RoleStrOption;
(function (RoleStrOption) {
    RoleStrOption["Admin"] = "Admin";
    RoleStrOption["Editor"] = "Editor";
    RoleStrOption["Guest"] = "Guest";
})(RoleStrOption || (RoleStrOption = {}));
;
