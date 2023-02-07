function reverseDataElement(element, BoolString, data = 'data-collapse'){
    if (BoolString == "false") {
        element.setAttribute(data, 'true');
    } else {
        element.setAttribute(data, 'false');
    }
}
function dropdown(contentElement, buttonElement, DropdownHaveLogo = false){
    reverseDataElement(buttonElement, buttonElement.getAttribute('data-collapse'));
    if(buttonElement.getAttribute('data-collapse') == 'true'){
        contentElement.classList.add('hidden');
        if (DropdownHaveLogo) {
            DropdownLogos.forEach(DropdownLogo => {
                DropdownLogo.classList.remove('rotate-180');
            });
        }
    }else {
        if (DropdownHaveLogo) {
            DropdownLogos.forEach(DropdownLogo => {
                DropdownLogo.classList.add('rotate-180');
            });
        }
        contentElement.classList.remove('hidden');
    }
}

const DropdownLogos = document.querySelectorAll('.DropdownLogo');
const navbarMobileElement = document.querySelector('#mobileNavbar');
const buttonBurgerDropdown = navbarMobileElement.querySelector('#buttonBurgerDropdown');
const buttonDropdownFoodMobile = navbarMobileElement.querySelector('#buttonMobileDropdownFood');
const contentBurgerDropdown = navbarMobileElement.querySelector('#contentBurgerDropdown');
const contentDropdownFoodMobile = navbarMobileElement.querySelector('#contentDropdownFoodMobile');

const navbarDesktopElement = document.querySelector('#desktopNavbar');
const buttonDropdownFoodDesktop = navbarDesktopElement.querySelector('#buttonDesktopDropdownMenu');
const contentDropdownFoodDesktop = navbarDesktopElement.querySelector('#contentDropdownFoodDesktop');

buttonDropdownFoodDesktop.addEventListener('click', (event) => {
    dropdown(contentDropdownFoodDesktop, buttonDropdownFoodDesktop, true);
});
buttonBurgerDropdown.addEventListener('click', (event) => {
    dropdown(contentBurgerDropdown, buttonBurgerDropdown);
});
buttonDropdownFoodMobile.addEventListener('click', (event) => {
    dropdown(contentDropdownFoodMobile, buttonDropdownFoodMobile, true);
});