// объект с текстами (они для проверки,Ю потом заменим 
// на реальные значения) для разных языков

const Locale_enUS:Record<string, string> = 
{
    "suffix": "_en_US",
    "pageTitle": "Foxtrot",
    "layoutFooterCopyright": "IT STEP, since 2026 Coursework",
    "languageButton": "en",
    "selectCity": "Kyiv",

}

export default Locale_enUS;

/*
<img src={`logo${locale.suffix}.png`} />

img/ 
logo_en_US.png
logo_uk_UA.png
*/