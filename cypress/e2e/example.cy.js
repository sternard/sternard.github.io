describe('portfolio homepage', () => {
  it('renders the complete desktop portfolio and its real project links', () => {
    cy.viewport(1440, 1000)
    cy.visit('/')

    cy.contains('h1', 'Useful software.').should('be.visible')
    cy.get('#gaffer').should('contain.text', 'Pre-release beta')
    cy.get('#code').should('contain.text', 'Storage Assistant')
    cy.get('#writing').should('contain.text', 'Postgraduate archive')
    cy.get('a[href="https://github.com/sternard/Storage-Assistant"]').should('have.length', 1)

    cy.get('a[href="/#code"]').click()
    cy.location('hash').should('equal', '#code')
    cy.screenshot('portfolio-desktop', { capture: 'fullPage' })
  })

  it('keeps the mobile layout inside the viewport', () => {
    cy.viewport(390, 844)
    cy.visit('/')

    cy.contains('h1', 'Useful software.').should('be.visible')
    cy.contains('Add /gaffer/club-overview.png').should('be.visible')
    cy.document().then((document) => {
      expect(document.documentElement.scrollWidth).to.be.at.most(
        document.documentElement.clientWidth,
      )
    })
    cy.screenshot('portfolio-mobile', { capture: 'fullPage' })
  })
})
