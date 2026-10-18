// объект с текстами (они для проверки,Ю потом заменим 
// на реальные значения) для разных языков

const Locale_enUS:Record<string, string> = 
{
    "suffix": "_en_US",
    "pageTitle": "Foxtrot",
    "layoutFooterCopyright": "IT STEP, since 2026 Coursework",
    "languageButton": "EN",
    "selectCity": "Kyiv",
    "windowCity": "You are here: ",
    "kyivCity": "The City of Kyiv?",
    "changeCity": "Change",
    "confirmCity": "Confirm",
    "allPromotions": "All promotions",
    "saleButtonHeader": "SALE UP TO 80% OFF",
    "tradeIn": "Trade-in",
    "storesHeader": "Stores",
    "toCustomers": "To customers",
    "btnHelp": "Help",
    "signIn": "Sign In",
    "btnCatalog": "PRODUCT CATALOG",
    "selected": "Selected",
    "scales": " Comparison",
    "warmerTogether": "Warmer together: up to -55%",
    "powerSources": "Power Sources",
    "smartphones": "Smartphones",
    "kitchenAppliances": "Kitchen Appliances",
    "homeAppliances": "Home Appliances",
    "beautyAndHealth": "Beauty and Health",
    "laptopsPCsTablets": "Laptops, PCs, tablets",
    "televisionsAndProjectors": "Televisions and Projectors",
    "forGamers": "For Gamers",
    "smartGadgets": "Smart gadgets",
    "audioPhotosVideo": "Audio, photos, video",
    "homeGardenPetSupplies": "Home, Garden & Pet Supplies",
    "dishes": "Dishes",
    "sportAndTourism": "Sport and Tourism",
    "toolsAndAutomotiveProducts": "Tools and Automotive Products",
    "productsForChildren": "Products for children",
    "services": "Services",
    "allCategories": "All categories",
    "downloadApp": "Download the app",
    "downloadAppTitle": "Download the Foxtrot app",
    "scanQrText": "Scan QR and download",







}

export default Locale_enUS;

/*
<img src={`logo${locale.suffix}.png`} />

img/ 
logo_en_US.png
logo_uk_UA.png
*/