class CoreVerticle {
    constructor(name, globalConfig, moduleConfig, verticleConfig){
        this.name = name || 'CoreVerticle'
        this.globalConfig = globalConfig || {}
        this.moduleConfig = moduleConfig || {}
        this.verticleConfig = verticleConfig || {}
    }
}
module.exports = CoreVerticle