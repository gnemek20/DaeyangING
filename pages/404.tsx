import { useRouter } from "next/router";
import { useEffect } from "react";

const HTTP404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.back();
  }, []);

  return (
    <div>
      <h1>404 Page Error</h1>
    </div>
  );
}

export default HTTP404;