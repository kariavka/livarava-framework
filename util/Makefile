setup:
    python setup.py

run:
	ember serve --environment="local"

local:
	ember serve --environment="local"

master:
	ember serve --environment="master"

build:
	ember build --environment="production"

refresh:
	git checkout develop; git pull; git checkout master; git pull

release:
	git checkout develop; git push; git checkout master; git push