export const LIMIT_BODY_SIZE = "10mb";
export enum ESocketEvents {
    CONNECTION = "connection",
    DISCONNECT = "disconnect",
    REGISTER = "register",
    PAYMENT_STATUS = "payment_status",
}
export const PRICE_PER_REQUEST = 5000; // 5.000 VND
export const MIN_AMOUNT_PAYMENT = 20000; // 20.000 VND
export const DEFAULT_CASH = 10000; // 10.000 VND
export const AVATAR_ADMIN = "https://res.cloudinary.com/dcrr9jwau/image/upload/v1702658555/DGU/avatar-admin.jpg";
export const NORMAL_ADMIN_ROLE = "001";
export const SUPER_ADMIN_ROLE = "002";
export const EXPIRATION_VERIFY_EMAIL = 24 * 60 * 60 * 1000; // 1 day
export const EXPIRES_ACCESS_TOKEN = 24 * 60 * 60 * 1000; // 1 day
export const VALID_TRANSFER_SYNTAX = /DGUPAYMENT(\d+)/;
