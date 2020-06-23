<template>
  <div class="modal">
    <div class="modal-title">
      <p></p>
      <p @click='close'>X</p>
    </div>
    <div>{{content}}</div>
  </div>
</template>

<script>

export default {
  name: 'Ass',
  props:['showModal','content'],
  data () {
    return {
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    close () {
      this.shwoModal = false
      this.$emit("close",false); 
    }
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
    width:400px;
    height:180px;
    position: fixed;
    bottom:100px;
    left:200px;
    background:rgba(0, 0, 0, .2);
}
.modal-title{
  height:40px;
}
.modal-title p:nth-child(1){
  float: left;
  margin-left: 20px;
}
.modal-title p:nth-child(2){
  float: right;
  margin-right: 20px;
  cursor:pointer;
}
.modal-content {
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}
.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
}
.modal-title {
    margin: 0;
    line-height: 1.42857143;
}



.header{
  background: url('../assets/header.png') no-repeat 100% 100%;
  width:100%;
  height:100px!important;
  background-size: 100%;
}
.title{
  width: 100%;
  height:30px;
  line-height: 30px;
  background: #eee;
  text-align: left;
}
.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
.box-card {
    width: 100%;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.wrap { 
  width: 40%;
            height: 40px;
            line-height: 20px;
            overflow: hidden;
        }
        
        .wrap .text {
            float: right;
            margin-left: -5px;
            width: 100%;
            word-break: break-all;
        }
        
        .wrap::before {
            float: left;
            width: 5px;
            content: '';
            height: 40px;
        }
        
        .wrap::after {
            float: right;
            content: "...";
            height: 20px;
            line-height: 20px;
            /* 为三个省略号的宽度 */
            width: 3em;
            /* 使盒子不占位置 */
            margin-left: -3em;
            /* 移动省略号位置 */
            position: relative;
            left: 100%;
            top: -20px;
            padding-right: 5px;
            background-color: #FFF;
        }
</style>
