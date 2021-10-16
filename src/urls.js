exports.supportedLocales = ['en', 'ru', 'hy'];

exports.homeUrl = (locale) => (locale === "hy" ? "/" : `/${locale}`)