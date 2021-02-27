describe(`app`, () => {
  it(`works`, () => {
    cy.visit(`/`).wait(10000);
    cy.findByRole(`heading`, { name: /my\stemplate/i });
  });
});
