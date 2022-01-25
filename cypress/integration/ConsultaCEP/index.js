/// <reference types="cypress" />

let street;
const address = 'Rua Belo Horizonte';
const locality = 'Cariacica';

When('search a valid zip code - {int}', (ZipCode) => {
  cy.request({
    method: 'GET',
    url: `https://viacep.com.br/ws/${ZipCode}/json`,
  }).then((response) => {
    expect(response.status).to.eq(200);
    street = response;
  });
});

Then('must bring the information linked to the street', () => {
  expect(street.body).not.be.empty;
  expect(street.body.logradouro).to.equal(address);
  expect(street.body.localidade).to.equal(locality);
});

When('search a invalid zip code - {int}', (ZipCode) => {
  cy.request({
    method: 'GET',
    url: `https://viacep.com.br/ws/${ZipCode}/json`,
  }).then((response) => {
    expect(response.status).to.eq(200);
    street = response;
  });
});

Then('should not bring the information linked to the street', () => {
  expect(street.body).not.be.empty;
});
