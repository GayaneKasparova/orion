const { defaultLocale } = require("./suportedLocales")
exports.homeUrl = locale => `/${locale !== defaultLocale ? locale : ''}`
exports.demoUrl = locale => `/${locale}/demo`