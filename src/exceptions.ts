import { Exception } from "@kaviar/core";

export class CooldownException extends Exception<{
  context: "login" | "reset-password";
}> {
  getMessage() {
    const { context } = this.data;

    return `In cooldown mode for ${context}.`;
  }
}

export class PasswordResetExpiredException extends Exception {
  getMessage() {
    return "Password reset attempt has expired.";
  }
}

export class InvalidTokenException extends Exception {
  getMessage() {
    return "Token is invalid.";
  }
}
