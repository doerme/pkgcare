var fs = require("fs")
var path = require("path")
var semverInc = require('semver/functions/inc')
var appDirectory = fs.realpathSync(process.cwd())
var resolveApp = relativePath => path.resolve(appDirectory, relativePath)
var inc = async () => {
    // console.log(`##inc##`)
    var packageObj = require(`${resolveApp('package.json')}`)
    // var pkgpath = path.join(__dirname, './package.json')
    // console.log(`pkginfo`, pkginfo)
    // console.log(`packageObj`, packageObj.version)
    var aimver = semverInc(packageObj.version, 'patch')
    console.log(`${packageObj.version} to ${aimver}`)
    packageObj.version = aimver
    fs.writeFileSync(path.resolve(appDirectory, 'package.json'), JSON.stringify(packageObj, null, 2));
}

module.exports = inc
