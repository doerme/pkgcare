# pkgcare add semver version for cli/npm script

## Install
```
npm install pkgcare
```

## Usage
In the npm script / package.json `script` value
```json
//...
"script": {
    "incversion": "pkgcare inc",  // version 1.0.0 change to 1.0.1  or version 1.0.0-beta.1 change to 1.0.0
    "incprerelease": "pkgcare inc prerelease", // version 1.0.0-beta.1 change to 1.0.0-beta.2  !!todo
    "incminor": "pkgcare inc prerelease", // version 1.0.0 change to 1.1.0  !!todo
    "incmajor": "pkgcare inc major" // version 1.0.0 change to 2.0.0  !!todo
}
//...

```