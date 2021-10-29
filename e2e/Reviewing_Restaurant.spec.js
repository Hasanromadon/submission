Feature('Review Restaurants');

Before(({ I }) => {
    I.amOnPage('/');
  });
  
  Scenario('review a restaurant', async ({ I }) => {
    const review = 'Keren ya';
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