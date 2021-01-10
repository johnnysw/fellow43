// components/wc/wc.js
Component({
  /**
   * 组件的属性列表
   */
  // 组件的生命周期
  lifetimes: {
    attached: function () {
      console.log('活着呢');
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      console.log('死掉啦');
      // 在组件实例被从页面节点树移除时执行
    }
  },
  properties: {
    // str:String,
    str: {
      type: String,
      value: '你没给我传，😒'
    }
  },
  options: {
    styleIsolation: 'isolated',
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0,
    obj: {
      age: 10
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    send() {
      this.triggerEvent('myEvent', {
        msg: '好好学习，加油！！！'
      })
    },
    add() {
      this.setData({
        num: this.data.num + 1,
        'obj.age': this.data.obj.age + 10
      })
    }

  },
  observers: {
    num(val) {
      console.log(val);
    },
    'obj.age': function (val) {
      console.log(val);
    }

  }
})