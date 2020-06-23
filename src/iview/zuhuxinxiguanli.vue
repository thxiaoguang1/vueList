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
                <FormItem label='运营指标code:' label-position='left'>
                  <Input size="default" v-model='code'></Input>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label='指标分类:' label-position='left'>
                  <Select size="default" style="width:'80px';text-align: left;" v-model='selectData'>
                    <Option value="value1">11</Option>
                    <Option value="value2">22</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label='运营指标名:' label-position='left'>
                  <Input size="default" v-model='name'></Input>
                </FormItem>
              </Col>
              <Col span="6">
                <Button type="primary" @click='handleSubmit'>查询</Button>
              </Col>
            </Row>
            <!-- <Row :gutter='10'>
              <Col span='8'>
                <FormItem label='运营指标名:' label-position='left'>
                  <Input size="default"></Input>
                </FormItem>
              </Col>
              
            </Row> -->
          </Form>
      </card>
      <Card style="margin-top: 10px;">
        <p slot="title" style="text-align:left">数据列表</p>
        <Table
          border
          :columns='columns1'
          :data='data1'
          size='small'
          placement='top'
        > 
				</Table>
				
			</Card>
      <ckModal :ckmodelValue='ckmodelValue'></ckModal>
      <Row type="flex" justify='end'> 
        <Col> 
          <Page 
            :total="100" 
            show-sizer 
            style="margin-top: 10px;" 
            class-name="pagination-contain"
          />
        </Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
import Menumode from '@/iview/index'
import ckModal from '@/components/ckModal'
export default {
  name: 'zuhuxinxiguanli',
  components:{
    Menumode,
    ckModal,
  },
  data () {
    return {
      ckmodelValue:false,
      selectData:'',
      name:'',
      code:'',
      selectData:'',
      columns1: [
        {
            title: '租户ID',
            key: 'name'
        },
        {
            title: '客户昵称',
            key: 'age'
        },
        {
            title: '绑定手机号',
            key: 'address'
				},
				{
            title: '登录账号',
						key: 'zhanghao',
						render:(h,params)=>{
							return h('a',{
								props:{
									type: 'primary',
								},
								on:{
									click:()=>{
										console.log('a')
									}
								}
							},params.row.zhanghao)
						}
				},
				{
            title: '注册时间',
						key: 'date',
						render:(h,params)=>{
							return h('a',{
								props:{
									type:'primary'
								},
								on:{
									click:()=>{
										this.$Message.success(params.row.date)
									}
								}
							},params.row.date)
						}
				}, 
				{
            title: '  ',
						key: 'kehu',
						render:(h,params)=>{
							return h('a',{
								props:{
									type:'primary',
                  border: 0,
								},
								on:{
									'click':()=>{
                    console.log(this.ckmodelValue)
										this.ckmodelValue=true
									}
								}
							},'查看')
						}
				}
				
      ],
      data1: [
        {
					name: '11',
					age: 18,
					address: '1234412',
					date: '2016-10-03',
					zhanghao:'1111',
        },
        {
					name: '22',
					age: 24,
					address: '123123123',
					date: '2016-10-01',
					zhanghao:'222',
        },
        {
					name: '33',
					age: 30,
					address: '123123123213',
					date: '2016-10-02',
					zhanghao:'333',
        },
        {
					name: '44',
					age: 26,
					address: '123123123123',
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
    },
    handleSubmit() {
      console.log(this.selectData,this.name,this.code)
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
