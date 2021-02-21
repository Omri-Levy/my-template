describe(`app`, () => {
	it(`works`, () => {
		cy.visit(`/`).wait(10000);
	});
});
