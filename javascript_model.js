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

function CarFactory () {}
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
CarFactory.make('Compact') // return car instance



// mixin模式

let _ = require('underscore')
var logger = (function () {
  var CustomLogger = {
    log: function (message) {
      console.log(message)
    }
  }
  return CustomLogger
})()

var Server = (function (Logger) {
  var CustomServer = function () {
    this.init = function () {
      this.log( 'Initializing Server...' )
    }
  }
  _.extend(CustomServer.prototype, Logger) // 把Logger对象中的log加在customserver的原型链上
  return CustomServer
})(logger)
new Server().init() //


// 装饰器模式demo basicServer, 用最基本的服务器拓展
function BasicServer () {
  this.pid = 1
  console.log('Initializing basic server')
  this.decorators_list = [] // empty decorate lists
}
// show all decorators
BasicServer.decorators = {}
BasicServer.decorators.serverNode = {
  init: function (pid) {
    return pid + 1 + 'node_server'
  }
}
BasicServer.decorators.servePHP = {
  init: function (pid) {
    return pid + 1 + 'php_server'
  }
}

// if invoke decorate(), we should push the decorate to the list
BasicServer.prototype.decorate = function (decorator) {
  this.decorators_list.push(decorator)
}

// when invoke this method, it will traverse descorator_list and find the item where it is in BasicServer.decorators and then run it
BasicServer.prototype.init = function () {
  var running_processes = 0
  var pid = this.pid
  for (var i = 0; i < this.decorators_list.length; i += 1){
    decorator_name = this.decorators_list[i]
    running_processes = BasicServer.decorators[decorator_name].init(pid)
  }
  return running_processes
}

var nodeServer = new BasicServer()
nodeServer.decorate('serverNode')
node_processes = nodeServer.init()
console.log(node_processes)
