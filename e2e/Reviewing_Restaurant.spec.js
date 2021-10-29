Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});
const review = 'Keren ya';
Scenario('review a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card');
  const firstRestoCard = locate('.card').first();
  I.click(firstRestoCard);
  I.seeElement('#comment-form');
  I.fillField('name', 'Hasan');
  I.fillField('review', review);
  I.click('#btn-submit-review');
  const newReview = locate('.review-text').last();
  I.see(review, newReview);
});
