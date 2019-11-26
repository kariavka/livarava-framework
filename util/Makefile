run:
	ember serve --environment="local"

local:
	ember serve --environment="local"

master:
	ember serve --environment="master"

build:
	ember build --environment="production"

deploy:
	scp -r dist/** hospodari@94.130.108.105:/home/hospodari/dist

refresh:
	git checkout develop; git pull; git checkout master; git pull

release:
	git checkout develop; git push; git checkout master; git push