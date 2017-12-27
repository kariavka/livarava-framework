import fnmatch
import os
from subprocess import call


def update_file(filepath, replace_map):
  print("Update {filepath}".format(filepath=filepath))
  lines = []

  # Open file for reading
  with open(filepath, "rt") as fin:
    for line in fin:
      newline = line

      for key in replace_map.keys():
        old = key
        new = replace_map[key]

        if old in line:
          newline = line.replace(old, new)

      lines.append(newline)

  # Open file for writing
  with open(filepath, "wt") as fout:
    for line in lines:
      fout.write(line)


name = raw_input(u"Project name: ")

if len(name) < 1:
  print(u"Invalid name! Exit.")
  exit()

# Update package
update_file('package.json', {
  '"name": "livarava-framework"': '"name": "{name}"'.format(name=name.lower()),
  '"description": "LivaRava Framework",': '"description": "{name}",'.format(name=name),
})

# Update README
update_file('README.md', {
  'livarava-framework': '{name}'.format(name=name.lower()),
})

# Update config
update_file('config/environment.js', {
  "modulePrefix: 'livarava-framework',": "modulePrefix: '{name}',".format(name=name.lower()),
})

# Update index.html
update_file('app/index.html', {
  '<title>LivaravaFramework</title>': '<title>{name}</title>'.format(name=name),
  'href="{{rootURL}}assets/livarava-framework.css"': 'href="{{rootURL}}assets/{name}.css"'.format(name=name.lower()),
  'src="{{rootURL}}assets/livarava-framework.js"': 'src="{{rootURL}}assets/{name}.js"'.format(name=name.lower()),
})

# Update *.js imports
for root, dirnames, filenames in os.walk('app'):
  for filename in fnmatch.filter(filenames, '*.js'):
    filepath = os.path.join(root, filename)
    update_file(filepath, {
      "from 'livarava-framework/": "from '{name}/".format(name=name.lower()),
    })

# Update npm
print("Update npm")
call(["npm", "install"])

# Update bower
print("Update bower")
call(["bower", "install"])
