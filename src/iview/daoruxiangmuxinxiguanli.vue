<template>
  <Row>
    <Col span="5">
      <menumode :activeName='activeName' :opennames='opennames'></menumode>    
    </Col>
    <Col span="19">
      <card>
        <p slot='title' style="text-align:left">筛选项</p>
          <Form :label-width="110">
            <Row :gutter='2'>
              <Col span="6">
                <FormItem label='项目编号:' label-position='left'>
                  <Input ></Input>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label='项目名称:' label-position='left'>
                  <Select style="width:'80px';text-align: left;" v-model='xmbhData'>
                    <Option value="1">11</Option>
                    <Option value="2">22</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label='导出时间:' label-position='left'>
                  <DatePicker type='date' size="default" placeholder='请选择时间' />
                </FormItem>
              </Col>   
              <Col span="6">
                <Button type="primary" size="default">查询</Button>
              </Col>    
            </Row>          
          </Form>
      </card>
      <Card style="margin-top: 10px;">
        <p slot="title" style="text-align:left">数据列表</p>
        <Table
        border
				:columns='columns1'
				:data='data1'
        size="default"
        > 
				</Table>
				
			</Card>
      <Row type="flex" justify='end'>
        <Col>
          <Page :total="100" show-sizer style="margin-top: 10px;" class-name="pagination-contain"/>
        </Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
import Menumode from '@/iview/index'
export default {
  name: 'daoruxiangmuxinxiguanli',
  components:{
    Menumode,
  },
  data () {
    return {
      selectData:'',
      xmbhData:'',
      xmzbqData:'',
      xmztData:'',
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: '项目编号',
          key: 'xmbh',
        },
        {
          title: '项目名称',
          key: 'xmname',
        },
        {
          title: '项目类别',
          key: 'xmlb',
        },
        {
          title: '项目状态',
          key: 'xmzt',
        },
        {
          title: '导入时间',
          key: 'date',
        },
        {
          title: '操作',
          key: 'action',
          width: '200',
          render: (h,params)=>{
            return h('a',{
              props: {
                type:'primary'
              },
              style: {
                marginRight : '10px'
              },
              on:{
                'click':()=>{
                  this.$Message.success(params.row.name)
                }
              }
            },'编辑补全信息')
          }
				},
      ],
      data1: [
        {
					name: '10020001',
					xmbh: 'CCB-001',
          xmzbq: '云南政务',
          xmname:'XXXXXX项目',
          ssxq: 10,
          sszxt: 10,
          xmlb:'上云事项',
          xmzt:'已上线',
					date: '2016-10-03',
					zhanghao:'1111',
        },
        {
					name: '10020002',
          xmbh: 'CCB-002',
          xmzbq: '云南政务',
          xmname:'XXXXXX项目',
          ssxq: 10,
          sszxt: 10,
          xmlb:'上云事项',
          xmzt:'已上线',
					address: 'London No. 1 Lake Park',
					date: '2016-10-01',
					zhanghao:'222',
        },
        {
					name: '10020003',
          xmbh: 'CCB-003',
          xmzbq: '云南政务',
          xmname:'XXXXXX项目',
          ssxq: 10,
          sszxt: 10,
          xmlb:'上云事项',
          xmzt:'已上线',
					address: 'Sydney No. 1 Lake Park',
					date: '2016-10-02',
					zhanghao:'333',
        },
        {
					name: '10020004',
          xmbh: 'CCB-004',
          xmzbq: '云南政务',
          xmname:'XXXXXX项目',
          ssxq: 10,
          sszxt: 10,
          xmlb:'上云事项',
          xmzt:'已上线',
					address: 'Ottawa No. 2 Lake Park',
					date: '2016-10-04',
					zhanghao:'4444',
        }
      ]
    }
  },
  methods: {
    info() {
      console.log(this.$route.params)
      this.activeName=this.$route.params.activeName;
      this.opennames=this.$route.params.opennames;
    }
  },
  created(){
    this.info();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
