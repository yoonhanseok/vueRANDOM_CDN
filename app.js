const app = new Vue({
  el: '#app',
  data() {
    return {
      tableData: [],
      GeneratedRandomNum: 0,
      clickNumber: 0
    }
  },

  created() {
    this.randomNum100()
  },

  methods: {
    randomNum100() {
      var RANDOM10 = Math.ceil((Math.random() * 10))
      console.log(RANDOM10)
      this.tableData.length = 0
      this.GeneratedRandomNum = RANDOM10
      for (var i = 0; i < RANDOM10; i++) {
        var DATA01 = Math.ceil((Math.random() * 100))
        var DATA02 = DATA01 * 2
        var DATAArr = { DATAa: DATA01, DATAb: DATA02 }
        this.tableData.push(DATAArr)

        console.log(DATA01)
        console.log(DATA02)
        console.log(DATAArr)
      }
    }
  }
});