var functions = require('../functions.js')
Page({
  data: {
    films: [],
    showLoading: true
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  scroll: function(e){
    console.log(e)
  },
  onLoad: function () {
      var that = this
      functions.getCity(function(city){
        fetch('https://api.douban.com/v2/movie/in_theaters?city=' + city).then(function(response){
          if(response.status !== 200){
              console.log("error："+ response.status)
              return
          }
          response.json().then(function(data){
              that.setData({
                films: data.subjects,
                showLoading: false
              })
          })
        })
      })
  },
  viewDetail: functions.viewDetail
})
