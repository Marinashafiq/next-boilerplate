import { useEffect } from "react";
import SingletonRouter, { Router } from "next/router";
import { useConfirm } from "material-ui-confirm";
import { useTranslation } from "../i18n";

export const useWarnIfUnsavedChanges = () => {
  const confirm = useConfirm();
  const { t } = useTranslation(["locale"]);
  useEffect(() => {
    SingletonRouter.router.change = (...args) => {
      if (
        args[2].split("/")[1] !== SingletonRouter.router.asPath.split("/")[1]
      ) {
        Router.prototype.change.apply(SingletonRouter.router, args);
      } else {
        confirm({
          title: t("confirm.confirmTitle"),
          description: t("confirm.confirmContent"),
          confirmationText: t("buttons.yes"),
          cancellationText: t("buttons.cancel"),
        })
          .then(() =>
            Router.prototype.change.apply(SingletonRouter.router, args)
          )
          .catch(() => new Promise((resolve, reject) => resolve(false)));
      }
    };

    return () => {
      delete SingletonRouter.router.change;
    };
  }, []);

  return null;
};
