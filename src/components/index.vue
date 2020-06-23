<template>
  <Row>
    <Col span="10">
      <i-menu theme='dark' accordion @on-select='info' :active-name="activeName" :open-names="opennames" style="height:650px">
        <Submenu name="1">
          <template  slot="title"><Icon type="ios-paper" />租户信息管理</template>
          <menu-item name="zuhuxinxiguanli">租户信息管理</menu-item>
        </Submenu>
        <Submenu name="2">
          <template  slot="title"><icon type="ios-paper" />项目信息管理</template>
          <Menu-Item name="xiangmuxinxiguanli">项目信息管理</Menu-Item>
          <Menu-Item name="daoruxiangmuxinxiguanli">导入项目信息管理</Menu-Item>
        </Submenu>
        <Submenu name="3">
          <template  slot="title"><icon type="ios-paper" />需求信息管理</template>
          <Menu-Item name="xuqiuxinxiguanli">需求信息管理</Menu-Item>
        </Submenu>
        <Submenu name="4">
            <template  slot="title"><icon type="ios-paper" />子系统信息管理</template>
            <Menu-Item name="4-1">子系统信息管理</Menu-Item>
            <Menu-Item name="4-2">系统运营指标管理</Menu-Item>
        </Submenu>
        <Submenu name="5">
            <template  slot="title"><icon type="ios-paper" />业务运营指标管理</template>
            <Menu-Item name="5-1">业务运营指标管理</Menu-Item>
            <Menu-Item name="5-2">业务运营指标类型管理</Menu-Item>
            <Menu-Item name="5-2">业务运营指标单位管理</Menu-Item>
        </Submenu>
        <Submenu name="6">
            <template  slot="title"><icon type="ios-paper" />云客户管理</template>
            <Menu-Item name="6-1">云客户管理</Menu-Item>
            <Menu-Item name="6-2">云客户标签分类管理</Menu-Item>
            <Menu-Item name="6-2">云客户标签管理</Menu-Item>
        </Submenu>
        <Submenu name="7">
            <template  slot="title"><icon type="ios-paper" />产品库存管理</template>
            <Menu-Item name="cvm">cvm库存管理</Menu-Item>
            <Menu-Item name="cbs">cbs库存管理</Menu-Item>
        </Submenu>
      </i-menu>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'Menumode',
  props:['activeName','opennames'],
  components:{
  },
  data () {
    return {
    }
  },
  methods: {
    info(name){
      if(name === 'zuhuxinxiguanli' || name === 'xuqiuxinxiguanli'){
        this.$router.push({
          name:name,
          params:{
            activeName:name,
            opennames:['1']
          },      
        })
      }else if(name === "xiangmuxinxiguanli" || name === 'daoruxiangmuxinxiguanli'){
        this.$router.push({
          name:name,
          params:{
            activeName:name,
            opennames:['2']
          },      
        })
      }else if(name==='cvm' || name === 'cbs'){
        this.$router.push({
          name:name,
          params:{
            activeName:name,
            opennames:['7']
          },      
        })
      }
      
      
    },
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
