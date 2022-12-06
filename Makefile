install:
	npm ci

lint:
	npm run lint

lint-fix:
	npm run lint:fix

format:
	npm run format

run:
	make install
	npm start