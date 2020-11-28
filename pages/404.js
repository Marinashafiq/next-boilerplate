import Link from "next/link";
import NoLayout from "../components/layouts/noLayout";
import i18n, { useTranslation } from "../i18n";

function Custom404() {
  // const { i18n : { language , t }} = i18n;
  const {
    i18n: { language },
    t,
  } = useTranslation();
  return (
    <div className="d-flex justify-content-center align-items-center text-center full-height">
      <div>
        <img
          className="image mb-4"
          src="https://media0.giphy.com/media/jUwpNzg9IcyrK/giphy.gif"
        />
        <h1>{t("oops")}</h1>
        <h3>404 | {t("notFoundPage")}</h3>
        <Link href={`/${language}/`}>Go back</Link>
      </div>
    </div>
  );
}

Custom404.Layout = NoLayout;

export default Custom404;
