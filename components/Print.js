import { useEffect } from "react";
import { useRouter } from "next/router";

const Print = () => {
  const router = useRouter();
  const { page } = router.query;

  useEffect(() => {
    if (page) {
      const pdfUrl = `https://gitlab.nomin.mn/${page}`;
      window.printJS(pdfUrl);
    }
  }, [page]);

  return null;
};

export default Print;
