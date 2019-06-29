const fs = require('fs');
class Launcher {
    constructor(){
        const args = process.argv.slice(2);
        if (args[0]){
            const globalConfigString = fs.readFileSync(args[0], 'utf8');
            this.globalConfig = JSON.parse(globalConfigString);
        } else {
            this.globalConfig = {};
        }
        Object.freeze(this.globalConfig);
        if(args[1]){
            const moduleConfig = fs.readFileSync(args[1], 'utf8');
            this.moduleConfig = JSON.parse(moduleConfig);
        } else {
            this.moduleConfig = {};
        }
        Object.freeze(this.moduleConfig);
    }
}
module.exports = Launcher