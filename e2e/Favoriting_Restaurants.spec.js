const assert = require('assert');

Feature('Favoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = 'Belum ada restoran ni';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.section__favorite__wrapper');
  I.see(emptyFavoriteRestoText, '.section__favorite__wrapper');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '.section__favorite__wrapper');
  I.amOnPage('/');
  const firstRestoCard = locate('.card__link__title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card__link__title');
  //compare clicked restaurant with restaurant on #favorite page
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  const firstRestoCard = locate('.card__link__title').first();
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const likedCardTitle = await I.grabTextFrom('.card__link__title');
  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSee('.card');
});
