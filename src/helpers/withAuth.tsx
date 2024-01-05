import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/store";

interface WithAuthProps {}

const withAuth = <T extends WithAuthProps>(
  Component: React.ComponentType<T>
) => {
  return function WithAuth(props: T) {
    const isAuthenticated = useAuthStore(
      (state: { isAuthenticated: boolean }) => state.isAuthenticated
    );
    const router = useRouter();

    useEffect(() => {
      console.error("Before redirection");
      if (!isAuthenticated) {
        router.push("/login");
      }
      console.error("After redirection");
    }, [isAuthenticated]);

    return <Component {...props} />;
  };
};

export default withAuth;
