import loginPage from "../../pages/loginPage";
import homePage from "../../pages/homePage";
import dataTest from "../../fixtures/dataTest";
import errorMessage from "../../fixtures/errorMessage";

describe('Login features', () => {
  it('Should login using valid credential', () => {
    homePage.clickOnMasuk();
    loginPage.login(dataTest.email_valid, dataTest.katasandi);
    homePage.elements.btnProfile().click();
    cy.contains(dataTest.email_valid).should('be.visible');
  })

  it('Should login using invalid credential', () => {
    homePage.clickOnMasuk();
    loginPage.login(dataTest.email_valid, dataTest.katasandi_invalid);
    cy.contains(errorMessage.invalid_credential).should('be.visible');
  })
})