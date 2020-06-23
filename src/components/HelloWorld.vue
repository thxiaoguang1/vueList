<template>
  <div>
  <el-container>
    <el-header class="header">
      <div></div>
    </el-header>  
    <el-main>
      <div class="title">详细信息</div>
      <el-tabs v-model="activeName">
          <el-tab-pane label="药品" name="first">药品</el-tab-pane>
          <el-tab-pane label="化妆品" name="second">化妆品</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      </el-tabs>
      <el-card class="box-card">
        <div slot="header"  class="clearfix">
          <span class="word">111</span>
         
        </div>
        <div v-for="index in 4" :key='index' class="text">
          {{index}}
        </div>
        
      </el-card>
      <el-card class="box-card">
          <div slot="header"  class="clearfix">
            <span class="word">111</span>
           
          </div>
          <div v-for="index in 4" :key='index' class="text">
            {{index}}
          </div>
          <div class="wrap">
            <div class="text" @mouseenter='toggleModal'>
                {{content}}
            </div>
            
        </div> 
        </el-card>
    </el-main>
  
  </el-container>
  <!-- <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
  <button>打开Modal对话框</button>
  <input type="number" style="ime-mode: disabled" v-model.number='aa'>
  <Ass v-show='showModal' @close='closeSelf' :content='content'></Ass>
  <div>{{aa}}</div>
  <div slot='title'>萨达萨达萨达</div>
  <div>
    <select name="" id="" v-model='selected'>
      <option v-for="option in options" :value='option.value'>{{option.text}}</option>
    </select>
    {{selected.number}}
  </div>
  <Table :columns="columns1" :data="data1" height="280">11</Table>
  <i-switch size="large" @on-change="switchOnchange"></i-switch>
</div>

</template>

<script>
import Ass from '@/components/yidong'
export default {
  name: 'HelloWorld',
  components:{
    Ass
  },
  data () {
    return {
      data2: [],
      columns1: [
        {
          title: 'Name',
          key: 'name',
          width: 200,
          render: (h,params)=>{
            return h('Input',{
              props: {
                value: this.data1[params.index].name
              },
              on: {
                'on-blur': (value) => {
                  this.data2[params.index].name=value.target.value
                }
              }
            }) 
          }
        },
        {
          title: 'Age',
          key: 'age',
          width: 200,
          render:(h,params)=>{
            return h('Input',{
              props: {
                // type: 'text',
                value: this.data1[params.index].age,
              },
              on:{
                'on-blur': (value) => {
                  console.log(value.target.value)
                  this.data2[params.index].age=value.target.value
                }
              }
            })
          }
        },
        {
          title: 'Address',
          key: 'address',
          width: 200,
          render:(h,params)=>{
            // console.log(this.data2)
            return h('Select', {
              
              on: {
                'on-change':(event,index) => {
                  this.data2[params.index].address=event
                }
              },
            },
            this.data1.map(function(type){
              return h('Option', {
                props:{
                  value:type.address
                }
              });
            })
            )
          }
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      msg: 'Welcome to Your Vue.js App',
      num1: 1,
      aa: 'a',
      activeName: 'first',
      selected: 'html2',
      showModal:false,
      options: [{
        text:'HTML',
        value:'html'
      },{
        text:'HTML2',
        value:'html2'
      }],
      content:"撒大苏打实打和速度手段和我的十四和红色的和化解纠纷的是实大苏打实打实大苏打实打实的That's the bas can also be displayed normally."
    }
  },
  // computed: {
  //   data2 (){
  //     console.log(this.data1)
  //     return this.data2=[...this.data1]
  //   },
  // },
  methods: {
    closeSelf () {
      this.showModal=false
    },
    toggleModal (){
      this.showModal=true
    },
    coppyArray(arr) {
      return arr.map((e)=>{
        console.log(e)
        if(typeof e === 'object') {
          return Object.assign({},e)
        }else {
          return e;
        }
      })
    },
    init(){

      this.data2=this.coppyArray(this.data1)
      // console.log(this.data2)
    },
    switchOnchange() {
      console.log(this.data1,'data1')
      console.log(this.data2)
    }
    
  },

  create(){
  },
  mounted(){
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .header{
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
} */
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
