<template>
  <div class="modal">
    <Row>
      <Col span="5">
        <menumode></menumode>       
      </Col>
      <Col span="19">
        <Card>
          <p slot='title' style="text-align:left">新增系统信息</p>
          <div class="leftIcon">
            <p></p>
            <p>系统信息</p>
          </div>
          <Row :gutter='10' style='margin-top: 30px;'>
            <Col span='4'>
            </Col>
            <Col span='15'>
              <Form :label-width='140' :rules='ruleInline' :model='formInline'>
                <FormItem label='租户UIN:' label-position='left' prop='UIN' inline>
                  <Input size='default' type='text' v-model='formInline.UIN' disabled></Input>
                </FormItem> 
                <FormItem label='项目编号:' label-position='left' prop='xmbh'>
                  <Input size='default' disabled v-model='formInline.xmbh'/>
                </FormItem> 
                <FormItem label='需求编号:' label-position='left' prop='xqbh'>
                  <Input size='default' disabled v-model='formInline.xqbh'/>
                </FormItem> 
                <FormItem label='需求名称:' label-position='left'>
                  <Input size='default' disabled v-model='formInline.xqmc'/>
                </FormItem> 
                <FormItem label='需求类型:' label-position='left' prop='xqlx'>
                  <Select size='default' style='text-align: left;'>
                    <Option value='11111'>1111</Option>
                    <Option value='2222'>2222</Option>
                  </Select>
                </FormItem> 
               
               
                <FormItem label='资源交付状态:' label-position='left' prop='zyjfzt'>
                  <Select size='default' style='text-align: left;'>
                    <Option value='11111'>1111</Option>
                    <Option value='2222'>2222</Option>
                  </Select>
                </FormItem>
                <FormItem label='资源交付时间:' label-position='left' prop='zyjfsj'>
                  <DatePicker type='date' style="width: 100%;" size='default'></DatePicker>
                </FormItem>
                <FormItem label='需求概述:' label-position='left'>
                  <Input type='textarea'></Input>
                </FormItem>
                <FormItem label='需求联系人:' label-position='left'>
                  <Table
                    size='small'
                    width="800"
                    border
                    :data='data'
                    :columns='columns'
                  ></Table>
                </FormItem>
                <FormItem label='资源数量:' label-position='left'>
                  <Table
                    size='small'
                    width="800"
                    border
                    :data='data2'
                    :columns='columns2'
                  ></Table>
                </FormItem>
            </Form>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import menumode from '@/components/index'
export default {
  name: 'chakanxinxi',
  props:['ckmodelValue'],
  components:{
    menumode
  },
  data () {
    return {
      disabled1:false,
      formInline: {
        UIN:'',
        xmbh:'',
        xtmc: '',
        xtmce:'',
        xtlb:'',
        sxzt:'',
        xqbh:'',
        xqlx:'',
        zyjfzt:'',
        zyjfsj:'',
      },
      ruleInline: {
        UIN: [
          {required:true, message:'请输入UIN', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
        xmbh: [
          {required:true, message:'请输入项目编号', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
        xqbh: [
          {required:true, message:'请输入需求编号', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
        xtmce: [
          {required:true, message:'请输入系统名称(英文)', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
        xtlb: [
          {required:true, message:'请输入系统类别', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
        xqlx: [
          {required:true, message:'请输入需求类型', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
        zyjfzt: [
          {required:true, message:'请输入资源交付状态', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
        sxzt: [
          {required:true, message:'请输入系统类别', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
        zyjfsj: [
          {required:true, message:'请输入资源交付时间', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
        
      },
      activeName: '',
      opennames:'',
      columns:[
        {
          title:'联系人类型',
          key:'lxrlx',
          render: (h,params)=>{
            // console.log(parmas)
            return h('Input',{
              'props':{
                size:'default',
                value:params.row.lxrlx,
                disabled:true
              },
              'on':{
                'on-blur':()=>{
                  console.log(params.row)
                }
              }
            })
          }
        },
        {
          title:'联系人',
          key:'lxr',
          render: (h,params)=>{
            return h('Input',{
              props:{
                size:'default',
                disabled:true,
                value:params.row.lxr
              },
              on:{
                'on-blur':()=>{
                }
              }
            })
          }
        },
        {
          title:'所属机构',
          key:'sxjg',
          render:(h,params)=>{
            return h('Input',{
              props:{
                size:'default',
                value:params.row.sxjg,
                disabled:true
              },
              on:{
                'on-blur':()=>{

                }
              }
            })
          }
        },
        {
          title:'联系电话',
          key:'phone',
          render:(h,params)=>{
            return h('Input',{
              props:{
                size:'default',
                value:params.row.phone,
                disabled:true
              },
            }) 
          }
        },
        {
          title:'邮箱',
          key:'email',
          render:(h,params)=>{
            return h('Input',{
              props:{
                size:'default',
                value:params.row.email,
                disabled:true
              },
            }) 
          }
        },
        {
          title:'备注',
          key:'beizhu',
          render:(h,params)=>{
            return h('Input',{
              props:{
                size:'default',
                value:params.row.beizhu,
                disabled:true
              },
            }) 
          }
        },
      ],
      data:[
        {
          lxrlx:'z张三的车1',
          lxr:'张三1',
          sxjg:'总行运营处',
          phone:'1235323663',
          email:'asdsad@21313',
          beizhu:'xxxxxx项目'
        },
        {
          lxrlx:'z张三的车2',
          lxr:'张三2',
          sxjg:'总行运营处',
          phone:'2235323663',
          email:'asdsad@21313',
          beizhu:'xxxxxx项目'
        },
        {
          lxrlx:'z张三的车3',
          lxr:'张三3',
          sxjg:'总行运营处',
          phone:'3235323663',
          email:'asdsad@21313',
          beizhu:'xxxxxx项目'
        },
        {
          lxrlx:'z张三的车4',
          lxr:'张三4',
          sxjg:'总行运营处',
          phone:'4235323663',
          email:'asdsad@21313',
          beizhu:'xxxxxx项目'
        },
      ],
      data2:[
        {
          cplx:'产品类型1',
          lxr:'张三1',
          sxjg:'总行运营处',
          phone:'1235323663',
          email:'asdsad@21313',
          beizhu:'xxxxxx项目'
        },
        {
          cplx:'产品类型2',
          lxr:'张三2',
          sxjg:'总行运营处',
          phone:'2235323663',
          email:'asdsad@21313',
          beizhu:'xxxxxx项目'
        },
        {
          cplx:'产品类型3',
          lxr:'张三3',
          sxjg:'总行运营处',
          phone:'3235323663',
          email:'asdsad@21313',
          beizhu:'xxxxxx项目'
        },
        {
          cplx:'产品类型4',
          lxr:'张三4',
          sxjg:'总行运营处',
          phone:'4235323663',
          email:'asdsad@21313',
          beizhu:'xxxxxx项目'
        },
      ],
      columns2:[
        {
          title:'产品类型',
          key:'cplx',
          width:135,
          render: (h,params)=>{
            return h('Select',{
              props:{
                size:'default',
                disabled:this.disabled1,
                value:params.row.cplx,
              },
             on:{
              'on-change':(value)=>{
              }
             }
            },
            this.data2.map((index)=>{
              console.log(index)
              return h('Option',{
                props:{
                  value:index.cplx,
                }
              },index.cplx)
            }))
           
          }
        },
        {
          title:'联系人',
          key:'lxr',
          render: (h,parmas)=>{
            return h('Input',{
              props:{
                size:'default',
                disabled:true,
                value:parmas.row.lxr
              },
              on:{
                'on-blur':()=>{
                }
              }
            })
          }
        },
        {
          title:'所属机构',
          key:'sxjg',
          render:(h,parmas)=>{
            return h('Input',{
              props:{
                size:'default',
                value:parmas.row.sxjg,
                disabled:true
              },
              on:{
                'on-blur':()=>{

                }
              }
            })
          }
        },
        {
          title:'联系电话',
          key:'phone',
          render:(h,parmas)=>{
            return h('Input',{
              props:{
                size:'default',
                value:parmas.row.phone,
                disabled:true
              },
            }) 
          }
        },
        {
          title:'邮箱',
          key:'email',
          render:(h,parmas)=>{
            return h('Input',{
              props:{
                size:'default',
                value:parmas.row.email,
                disabled:true
              },
            }) 
          }
        },
        {
          title:'备注',
          key:'beizhu',
          render:(h,parmas)=>{
            return h('Input',{
              props:{
                size:'default',
                value:parmas.row.beizhu,
                disabled:true
              },
            }) 
          }
        },
      ],
      
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    close () {
      this.shwoModal = false
      this.$emit("close",false); 
    },
    info(){
      this.disabled1=true
    }
  },
  mounted(){
    // this.info();
  },
  created(){
    this.info();
  },
  mounted(){
    this.formInline=(this.$route.params.row)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leftIcon p:nth-child(1){
  width: 5px;
  height: 20px;
  background: rgba(0, 121, 254, 1);
  float: left;
}
.leftIcon p:nth-child(2){
  float: left;
  margin-left: 15px;
}
.leftIcon{
  overflow: hidden;
}
</style>
