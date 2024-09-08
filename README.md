<h1 align="center"> Node Package Manager Guide <img src="./img/icons8-npm-48.png" > </h1>

## Commands :

1. `npm init` : initialize npm for local project by asking questions and create package.json
1. `npm init -y` or `npm init --yes` : initializing npm for local project with difault values and create package.json
1. `npm i <packageName> [<package2Name>]...` or `npm install <packageName> [<package2Name>]...`: install dependencies(packages) for project and add them to node_modules and package.json 
1. `npm uninstall <packageName>` : uninstall a dependency(package) from project and remove it from node_modules and package.json
1. `npm i` : install all required packages for project that specified in package.json (create node_modules)
1. `npm i <packageName>@<majorVersion>.[<minorVersion>].[<patchVersion>]` : install a specific version of a package.
1. `npm i <packageName> --save-dev` : install a dependency(package) in development phase (project can run without it)
1. `npm i <packageName> -g` : install a package for project globaly and accesible on all drives(path: 'C:\Users\mhow3\AppData\Roaming\npm\node_modules')
1. `npm uninstall <packageName> -g` : uninstall a package globaly
1. `npm list` : log all dependencies to last depth
1. `npm list --depth <N>` : log dependencies in a specific depth (\<N>)
1. `npm [config] set init-<initial-property> "initialValue"` : set a default value for npm package.json properties
1. `npm [config] get init-<initial-property>` : get a property of package.json