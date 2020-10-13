
# Install node modules.
node_modules: package.json
	@npm install

# Run the tests.
test:
	@./node_modules/.bin/mocha
	@npm test

# Phony targets.
.PHONY: test