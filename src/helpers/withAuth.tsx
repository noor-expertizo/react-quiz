import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/store";

const withAuth = (Component: React.ComponentType<any>) => {
  return function WithAuth(props: any) {
    const isAuthenticated = useAuthStore((state: any) => state.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      console.error("Before redirection");
      if (!isAuthenticated) {
        router.push("/login");
      }
      console.error("After redirection");
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
