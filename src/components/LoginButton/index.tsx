import { usePrivy } from "@privy-io/react-auth";
import { Button } from "../ui/button";
import { signIn } from "@/lib/utils";

const LoginButton = () => {
  const { login, user } = usePrivy();

  return (
    <Button className="" onClick={login}>
      Login
    </Button>
  );
};

export default LoginButton;
