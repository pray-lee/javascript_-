// javascript模式

// 创建命名空间
var SERVER = SERVER || {}
SERVER.basicServerConfig = (function () {
  var environment = 'production',
  startupParams = {
    cacheTimout: 30,
    locale: 'en_US'
  }
  return {
    init: function () {
      console.log('initializing the server')
    },
    updateStartup: function (params) {
      this.startupParams = params
      console.log(this.startupParams.cacheTimeout)
      console.log(this.startupParams.locale)
    }
  }
})()
SERVER.basicServerConfig.init()
SERVER.basicServerConfig.updateStartup({cacheTimeout: 60, locale: 'en_UK'})

// 标准工厂模式
// 工厂构造函数

function CarFactory = () {}
CarFactory.prototype.info = function () {
  console.log(this.doors, this.engine_capacity)
}
CarFactory.make = function (type) {
  var constr = type
  var car
  CarFactory[constr].prototype = new CarFactory()
  car = new CarFactory[constr]()
  return car
}
CarFactory.Compact = function () {
  this.door = 4;
  this.engine_capacity = 2
}
CarFactory.make('Compact')

// mixin模式
