var fs = require("fs")
var path = require("path")
var inc = async () => {
    var pkginfo = require('./package.json')
    var pkgpath = path.join(__dirname, './package.json')
    console.log(`pkginfo`, pkginfo)
    console.log(`pkgpath`, pkgpath)
}

module.exports = inc
