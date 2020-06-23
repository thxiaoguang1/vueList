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
                <FormItem label='系统名称:' label-position='left' prop='xtmc'>
                  <Input size='default' v-model='formInline.xtmc' placeholder='请输入系统名称'/>
                </FormItem> 
                <FormItem label='系统名称(英文):' label-position='left' prop='xtmce'>
                  <Input size='default' v-model='formInline.xtmce' placeholder='请输入系统名称'/>
                </FormItem> 
                <FormItem label='系统类型:' label-position='left' prop='xtlb'>
                  <Input size='default' v-model='formInline.xtlb'/>
                </FormItem> 
                <FormItem label='系统级别:' label-position='left'>
                  <Input size='default'/>
                </FormItem>
                <FormItem label='上线状态:' label-position='left' prop='sxzt'>
                  <Input size='default' v-model='formInline.sxzt'/>
                </FormItem>
                <FormItem label='系统上线时间:' label-position='left'>
                  <DatePicker type='date' style="width: 100%;"></DatePicker>
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
  name: 'addxtxx',
  props:['ckmodelValue'],
  components:{
    menumode
  },
  data () {
    return {
      formInline: {
        UIN:'',
        xmbh:'',
        xtmc: '',
        xtmce:'',
        xtlb:'',
        sxzt:'',
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
        xtmc: [
          {required:true, message:'请输入系统名称', trigger:'blur'},
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
        sxzt: [
          {required:true, message:'请输入系统类别', trigger:'blur'},
          {max:32, message:'请输入32位', trigger:'blur'}
        ],
      },
      activeName: '',
      opennames:'',
      columns:[
        {
          title:'客户端编号',
          key:'bh',
          width:150
        },
        {
          title:'云客户类型',
          key:'type',
        },
        {
          title:'云客户名称',
          key:'name',
        },
        {
          title:'参与项目',
          key:'xm',
          render:(h,params)=>{
            return h('a',{
              props: {
                type: 'primary'
              },
              on: {
                'click':()=>{

                }
              }
            },params.row.xm)
          }
        }
      ],
      data:[
        {
          bh:'CCB-001-001',
          type:'内部客户',
          name:'总行运营处',
          xm:'xxxxxx项目'
        },
        {
          bh:'CCB-001-002',
          type:'内部客户',
          name:'总行运营处',
          xm:'xxxxxx项目'
        },
        {
          bh:'CCB-001-003',
          type:'内部客户',
          name:'总行运营处',
          xm:'xxxxxx项目'
        },
        {
          bh:'CCB-001-004',
          type:'内部客户',
          name:'总行运营处',
          xm:'xxxxxx项目'
        },
      ]
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
