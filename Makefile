install:
	npm install babel-cli babel-core babel-preset-env babel-preset-stage-0

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

readline:
	npm install readline-sync


