install:
	npm ci

run:
	npm run dev

build:
	npm build-dev

build:
	npm build-prod

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
