install:
	npm ci

test:
	make install
	npm run test

lint:
	make install
	npm run lint

lint-fix:
	npm run lint:fix

format:
	npm run format

run:
	npm run dev