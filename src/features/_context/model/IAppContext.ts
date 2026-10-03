// что должно находиться внутри AppContext?
// 1) текущий язык    locale:Record<string, string> (англ  Locale_enUS   или   укр   Locale_ukUA)
// 2) функция switchLocale, которая получает Record<string, string>
//    , то есть новую локаль, кот. ничего не возвращ.

export default interface IAppContext {
    locale:Record<string, string>,
    switchLocale(locale:Record<string, string>): void,
}