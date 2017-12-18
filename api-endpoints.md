#Model: Account
Deny Everyone     *
Allow Everyone    /Account/login
Allow Everyone    /Account/logout
Allow Owner       /Account/findById
Allow Owner       /Account/updateAttributes

##related Models
Allow Owner       /Account/{id}/workHours
Allow Owner       /Account/{id}/roles