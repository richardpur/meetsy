import { useSession } from "next-auth/react";
import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";

export const authRoute = (Component: any) => {
  return (props: any) => {
    const { status } = useSession();

    if (status === "authenticated") {
      return <Component {...props} />;
    }
    return <RedirectRoute />;
  };
};

const RedirectRoute: FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return null;
};
