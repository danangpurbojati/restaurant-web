const assert = require('assert');

Feature('Giving Review');

Scenario('giving review on one restaurant', async ({ I }) => {
    I.amOnPage('/');
    
    I.seeElement('.menu-detail a');
    
    I.click(locate('.menu-detail a').first());

    I.seeElement('#form-review');

    const name = 'joni';
    const comment = 'testing review';

    I.fillField('#name-form', name);
    I.fillField('#comment-form', comment);

    I.click('#form-review .submit')

    I.seeElement(locate('.review-wrapper').last());

    const lastReviewName = locate('.reviewer').last().withText(name);
    const lastReviewComment = locate('.review-text').last().withText(comment);

    const lastReviewNameText = await I.grabTextFrom(lastReviewName);
    const lastReviewCommentText = await I.grabTextFrom(lastReviewComment)
    
    assert.strictEqual(name, lastReviewNameText);
    assert.strictEqual(comment, lastReviewCommentText);
});