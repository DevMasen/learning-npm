<h1 align="center"> Node Package Manager Guide <img src="./img/icons8-npm-48.png" > </h1>

## Commands :

1. `npm init` : initialize npm for local project by asking questions and create package.json
1. `npm init -y` or `npm init --yes` : initializing npm for local project with difault values and create package.json
1. `npm i <packageName>` or `npm install <packageName>`: install a dependency(package) for project and add it to node_modules and package.json 
1. `npm uninstall <packageName>` : uninstall a dependency(package) from project and remove it from node_modules and package.json
1. `npm i` : install all required packages for project that specified in package.json (create node_modules)
1. `npm i <packageName>@<majorVersion>.[<minorVersion>].[<patchVersion>]` : install a specific version of a package.
1. `npm i <packageName> --save-dev` : install a dependency(package) in development phase (project can run without it)

