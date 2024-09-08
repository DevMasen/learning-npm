<h1 align="center"> Node Package Manager Guide <img src="./img/icons8-npm-48.png" > </h1>

## Commands :

1. `npm init` : initialize npm for local project by asking questions and create package.json
1. `npm init -y` or `npm init --yes` : initializing npm for local project with difault values and create package.json
1. `npm i <packageName> [<package2Name>]...[--save]` or `npm install <packageName> [<package2Name>]...[--save]`: install dependencies(packages) for project and add them to node_modules and package.json 
1. `npm uninstall <packageName>` or `npm un <packageName>` : uninstall a dependency(package) from project and remove it from node_modules and package.json
1. `npm remove <packageName>` or `npm rm <packageName>` : remove(uninstall) a package
1. `npm i` : install all required packages for project that specified in package.json (create node_modules)
1. `npm i <packageName>@<majorVersion>.[<minorVersion>].[<patchVersion>]` : install a specific version of a package.
1. `npm i <packageName> --save-dev` or `npm i <packageName> -D` : install a dependency(package) in development phase (project can run without it)
1. `npm i <packageName> -g` : install a package for project globaly and accesible on all drives(path: 'C:\Users\mhow3\AppData\Roaming\npm\node_modules')
1. `npm uninstall <packageName> -g` : uninstall a package globaly
1. `npm list` : log all dependencies to last depth
1. `npm list --depth <N>` : log dependencies in a specific depth (\<N>)
1. `npm [config] set init-<initial-property> "initialValue"` : set a default value for npm package.json properties
1. `npm [config] get init-<initial-property>` : get a property of package.json
1. `npm run <customScript>` : run a custom script that wrote in package.json "scripts"
1. `node <javascriptFileName>` : run a javascript file with node.js
1. `tsc <typescriptFile>` : transport a typescript file into javascript file
1. `tsc <typescriptFile> -w` : transport and watch a typescript file into javascript
1. `npm update` : update packages to the last version toward one of these character before version in package.json (^ : patch and minor , ~ : patch only , * : major and minor and patch)
1. `npx parcel <index.html>` : build a webapp with parcel



## Notes :
- #### npx(Node Package Execute) : run package that have not been installed on project
