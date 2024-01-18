const { test } = QUnit;

QUnit.module('DOM', (hooks) => {
	hooks.beforeEach(() => {
		document.body.insertAdjacentHTML('afterbegin', getBodyContent());
	});

	hooks.afterEach(() => {
		document.body.removeChild(document.getElementById('wrapper'));
	});

	test('should have a string type of heading one content element', (assert) => {
		const headingOneEl = document.querySelector('h1');
		const headingOneContent = headingOneEl.textContent;

		assert.equal(typeof headingOneContent, 'string');
	});

	test("should have a mark element that equals 'insights'", (assert) => {
		const cardTitleEl = document.querySelector('.card__title');
		const cardMark = cardTitleEl.querySelector('mark').textContent;

		assert.equal(cardMark, 'insights');
	});

	test('should have two children inside of the article element', (assert) => {
		const articleEl = document.querySelector('article');
		const articleChildrenEls = articleEl.children;

		assert.strictEqual(articleChildrenEls.length, 2);
	});

	test('should have an empty alt attribute value of card image element', (assert) => {
		const cardImgEl = document.querySelector('.card__image img');
		const cardImgAlt = cardImgEl.getAttribute('alt');

		assert.equal(cardImgAlt, '');
	});
});
