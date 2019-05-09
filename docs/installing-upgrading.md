Upgrading Node.js using 'n' (Mac) 
===

**upgrade global packages**

1. Check for [outdated](https://docs.npmjs.com/cli/outdated) global packages 

    `npm outdated -g --depth=0` 

2. [Update](https://docs.npmjs.com/cli/update) outdated packages

   `npm update -g ` for all packages or `npm update -g some-package-name` for a specific package.

### Upgrading Node

These are steps for upgrading node.js using the [node version manager 'n'](https://github.com/tj/n). **Note that 'n' does not work with Windows - this is for Mac only.**

1. Check the current version

   `node -v`

2. Clean out the npm cache

   `sudo npm cache clean -f`

3. Install node helper (n) globally using following command.

   `sudo npm install -g n`

4. Once 'n' is installed, upgrade to the latest version of Node.js supported by AWS Lambda (currently 8.10)

   `sudo n 8.10`

5. After upgrading, confirm the version is now 8.10

   `node -v`

