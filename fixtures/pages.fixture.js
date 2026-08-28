import { test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/login.page"
import { CheckoutPage } from "../pages/checkout.page"
import { HomePage } from "../pages/home.page";
import {RegistrationPage} from "../pages/registration.page"

export const test = baseTest.extend({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    checkoutPage: async({page}, use) =>{
        await use(new CheckoutPage(page));
    },
    homePage: async({page}, use) => {
        await use(new HomePage(page));
    },
    registrationPage: async({page}, use) => {
        await use(new RegistrationPage(page));
    },
});

export { expect } from "@playwright/test"
