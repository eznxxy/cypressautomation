class loginPage {
    elements = {
        emailField: () => cy.get("[data-testid='TextInputAlmatEmailLogin']"),
        katasandiField: () => cy.get("[data-testid='TextInputKataSandiLogin']"),
        btnLogin: () => cy.get("[test-id='ButtonMasukLogin2']")
    }

    login(email, katasandi) {
        this.elements.emailField().should('be.visible').type(email);
        this.elements.katasandiField().should('be.visible').type(katasandi);
        this.elements.btnLogin().should('be.visible').click();
    }
}

module.exports = new loginPage();