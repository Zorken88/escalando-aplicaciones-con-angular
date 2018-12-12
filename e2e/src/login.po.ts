import { browser, by, element } from 'protractor';
import { all } from 'q';

export class LoginPage {
    selectors = {
        'form': 'form',
        'email': 'input[name="email"]',
        'password': 'input[name="password"]',
        'checkbox': 'input[name="rememberMe"]',
        'selectGroup': '[name="group"]',
        'loginButton': 'button',
    };

    navigateToLogin() {
        return browser.get('/login');
    }

    setEmail(email) {
        element(by.css(this.selectors.email)).sendKeys(email);
    }

    setPassword(password) {
        element(by.css(this.selectors.password)).sendKeys(password);
    }

    selectGroupOptionLastValue() {
        element(by.css(this.selectors.selectGroup)).click()
            .then(() => element.all(by.css('mat-option')).last().click());
    }

    logIn() {
        element(by.css(this.selectors.loginButton)).click();
     }
}
