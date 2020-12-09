const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  en: "en",
  ar: "ar"
};

module.exports = {
  publicRuntimeConfig: {
    localeSubpaths,
  },
  async rewrites() {
    return [
      ...nextI18NextRewrites(localeSubpaths),
      {
        source: '/:lang(en|ar)?/:path*',
        destination: '/:lang(en|ar)?/:path*', // Matched parameters can be used in the destination
      },
    ]
  },
};
