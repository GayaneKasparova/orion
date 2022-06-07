const { defaultLocale } = require("./suportedLocales")
exports.homeUrl = locale => `/${locale !== defaultLocale ? locale : ''}`
exports.articleUrl = (locale, type, slug) => `/${locale}/${type}/${slug}`
exports.teamMemberUrl = (locale, slug) => `/${locale}/team/${slug}`
exports.sportsClubUrl = locale => `/${locale}/sports-club`
exports.yogaStudioUrl = locale => `/${locale}/yoga-studio`
exports.boxingSalonUrl = locale => `/${locale}/boxing-salon`
exports.meetingRoomUrl = locale => `/${locale}/meeting-room`
exports.barUrl = locale => `/${locale}/bar`
exports.demoPageUrl = locale => `/${locale}/demo`