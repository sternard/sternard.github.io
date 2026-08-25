const papers = [
  {
    title: 'Research Design for Evaluating Machine-Learning Delivery-Delay Prediction',
    href: '/essays/Research_Methods_Summative.pdf',
  },
  {
    title: 'Risk Assessment and Management Plan for a Satellite Navigation System',
    href: '/essays/Risk%20Assessment%20and%20Management%20Plan.pdf',
  },
]

describe('portfolio homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('presents the portfolio and its supporting assets', () => {
    cy.contains('h1', 'Useful software.').should('be.visible')

    cy.get('#gaffer').should('contain.text', 'currently in pre-release beta')
    cy.get('#gaffer .phone-gallery').scrollIntoView()
    cy.get('#gaffer .phone-frame img')
      .should('have.length', 3)
      .each(($image) => {
        cy.wrap($image).should('have.attr', 'loading', 'lazy')
        cy.wrap($image).should(($loadedImage) => {
          expect(
            $loadedImage[0].naturalWidth,
            `${$loadedImage.attr('alt')} loaded`,
          ).to.be.greaterThan(0)
        })
      })
    cy.get('#gaffer .screen-fallback').should('not.exist')

    cy.get('#automation .experience-card').should('have.length', 4)
    cy.get('#code .project-card').should('have.length', 3)
    cy.get('#writing .paper-card').should('have.length', 2)
  })

  it('links to each section and the published work', () => {
    const sections = [
      ['Gaffer', '#gaffer'],
      ['Automation', '#automation'],
      ['Code', '#code'],
      ['Writing', '#writing'],
    ]

    sections.forEach(([label, hash]) => {
      cy.contains('.site-nav a', label).click()
      cy.location('hash').should('equal', hash)
      cy.get(hash).should('be.visible')
    })

    cy.contains('.header-contact', 'Get in touch').click()
    cy.location('hash').should('equal', '#contact')
    cy.get('#contact').should('be.visible')

    cy.contains('#gaffer a', 'Join the Discord')
      .should('have.attr', 'href', 'https://discord.com/invite/kf9Uf6xtz')
      .and('have.attr', 'target', '_blank')

    papers.forEach((paper) => {
      cy.contains('#writing .paper-card', paper.title)
        .should('have.attr', 'href', paper.href)
        .and('have.attr', 'target', '_blank')
      cy.request(paper.href).its('status').should('equal', 200)
    })
  })

  it('keeps the core content usable on a mobile viewport', () => {
    cy.viewport(390, 844)

    cy.contains('h1', 'Useful software.').should('be.visible')
    cy.get('.site-nav').should('not.be.visible')
    cy.get('.header-contact').should('be.visible')
    cy.get('#gaffer .phone-frame img').should('have.length', 3)
    cy.get('#writing .paper-card').should('have.length', 2)

    cy.document().then((document) => {
      expect(document.documentElement.scrollWidth).to.be.at.most(
        document.documentElement.clientWidth,
      )
    })
  })
})
