class CoreVerticle {
    constructor(input){
        this.name = input.name || 'CoreVerticle'
        this.globalConfig = input.globalConfig || {}
        this.moduleConfig = input.moduleConfig || {}
        this.verticleConfig = input.verticleConfig || {}
    }
}
module.exports = CoreVerticle