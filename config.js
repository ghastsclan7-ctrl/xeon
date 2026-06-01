const fs = require('fs')

global.prefa = ['','!','.',',','🗿']

global.licenseKey = "XEON-D6BDD3365B81DE16830BA1BD844B593F";  //put ur key here
global.waownernumber = ["2348022159244"]
global.tgownername = 'GREY'

let file = require.resolve(__filename)
require('fs').watchFile(file, () => { 
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})
