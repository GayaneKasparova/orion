const { defaultLocale } = require("./suportedLocales")
exports.homeUrl = locale => `/${locale !== defaultLocale ? locale : ''}`
exports.articleUrl = (locale, type, slug) => `/${locale}/${type}/${slug}`
exports.teamMemberUrl = (locale, slug) => `/${locale}/team/${slug}`
exports.demoUrl = locale => `/${locale}/demo`