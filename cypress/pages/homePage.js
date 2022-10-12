class homePage {
    elements = {
        btnMasuk: () => cy.get("a[href*='masuk']"),
        btnProfile: () => cy.get(".avatar")
    }

    clickOnMasuk() {
        this.elements.btnMasuk().click();
    }
}

module.exports = new homePage();