import { ResponseData } from "./classes";

export const RESPONSES = {
    SUCCESS: new ResponseData('Everything works!', 200),
    VALIDATION_ERROR: new ResponseData('Invalid format / validation error', 403),
    USERNAME_ALREADY_EXISTS: new ResponseData('Conflict with an existing resource', 409),
    USERNAME_DOESNT_EXIST: new ResponseData('Username doesn\'t exist', 401),
    PASSWORD_DOESNT_MATCH: new ResponseData('Wrong password', 401),
} as const;

export const DID_USER_GET_CREATED = {
    KEY: 'user_created',
    VALUE: 'success', 
} as const;