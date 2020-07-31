import { Event } from "@kaviar/core";

/**
 * This happens after we attached "password" strategy to the user
 */
export class PasswordAuthenticationStrategyAttachedEvent extends Event<{
  userId: any;
}> {}

/**
 * This is when a password reset has been requested
 */
export class PasswordResetRequestedEvent extends Event<{
  userId: any;
  token: string;
}> {}

/**
 * This is when the password has been succesfully reset with the given token
 */
export class PasswordResetWithTokenEvent extends Event<{
  userId: any;
  token: string;
}> {}

/**
 * This is emitted when we verify if the password is ok and it isn't
 */
export class PasswordInvalidEvent extends Event<{
  userId: any;
}> {}

/**
 * This is emitted when we verify if the password is ok and it really is
 */
export class PasswordValidatedEvent extends Event<{
  userId: any;
}> {}

/**
 * This is emitted when we verify if the password is ok and it really is
 */
export class UserLockedAfterFailedAttemptsEvent extends Event<{
  userId: any;
  failedAttempts: number;
}> {}
