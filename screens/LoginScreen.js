import { useState } from "react";
import LoadingOverlay from "../componenets/ui/LoadingOverlay";
import AuthContent from "../componenets/Auth/AuthContent";
import { login } from "../util/auth";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    await login(email, password);
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in" />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
