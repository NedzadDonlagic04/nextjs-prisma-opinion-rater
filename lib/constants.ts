export const HTTP_STATUS = {
    SUCCESS: 200,                   // Everything works!
    VALIDATION_ERROR: 403,          // Invalid format / validation error
    USERNAME_ALREADY_EXISTS: 409,   // Conflict with an existing resource 
};

export const DID_USER_GET_CREATED = {
    KEY: 'user_created',
    VALUE: 'success', 
}