<template>
  <Row>
    <Col span="5">
      <menumode :activeName='activeName' :opennames='opennames'></menumode>
      
    </Col>
    <Col span="19">
      <!-- <card>
        <p slot='title' style="text-align:left">筛选项</p>
          <Row :gutter='10'>
            <Col span='5'>
              
                <Select size='default'  placrholder='全部产品项' style="text-align: left;">
                  <Option value="1">11</Option>
                  <Option value="2">222</Option>
                </Select>  
            </Col>
          </Row>
          
      </card> -->
      <Card style="margin-top: 10px;">
        <div style="overflow: hidden">
          <p  style="float:left">数据列表</p>
          <p  style="float:right;color:#0079FE">
存储总计:{{sl}}</p> 
        </div>
        <!--     :span-method='handlespan' -->
        <Table
        style='margin-top:20px;'
          border
          :columns='columns1'
          :data='data1'
          size='small'
          placement='top'
        > 
				</Table>
				
			</Card>
      <ckModal :ckmodelValue='ckmodelValue'></ckModal>
       
      <Page 
        :total="100" 
        show-sizer 
        style="margin-top: 10px;" 
        type="flex" 
        justify='end' 
        class-name="pagination-contain"
      />
    </Col>
  </Row>
</template>

<script>
import Menumode from '@/iview/index'
import ckModal from '@/components/ckModal'
export default {
  name: 'cbs',
  components:{
    Menumode,
    ckModal,
  },
  data () {
    return {
      sl:'',
      ckmodelValue:false,
      selectData:'',
      name:'',
      code:'',
      selectData:'',
      columns1: [
        {
            title: '可用分区',
            key: 'kyfq',
        },
        {
          title: '仓库ID',
          key: 'ckID',
          render:(h,params)=>{
            console.log(params)
              return h('div',{
              style:{
                // padding:'0px',
              },
              class:'ckid'
              },[
                h('ul',{},[
                  params.row.ckID.aa.map((item)=>{
                  console.log(item)
                  return h('li',{
                    style:{
                      paddingLeft:'20px',
                      height:'40px',
                      listStyle:'none',
                      marginLeft:'-20px',
                      marginRight:'-20px',
                      borderBottom:'1px solid #e8eaec',
                      textAlign: 'left',
                      lineHeight: '40px'
                    }
                    },item
                  )           
                })
                ])
                
              ]
            )             
          }
        },
        {
            title: '仓库名称',
            key: 'ckmc',
            render: (h,params)=>{
              return h('div',{
                class:'ckid'
              },[
                h('ul',{                
                },[params.row.ckmc.bb.map((item)=>{
                  return h('li',{
                    style:{
                      paddingLeft:'20px',
                      height:'40px',
                      listStyle:'none',
                      marginLeft:'-20px',
                      marginRight:'-20px',
                      borderBottom:'1px solid #e8eaec',
                      textAlign: 'left',
                      lineHeight: '40px'
                    }
                  },item)
                })])
              ])
            }
        },
        {
            title: '云盘类型',
            key: 'yplx'
				},
        {
            title: '仓库可用库存量(GB)',
            key: 'ckkykcl'
				},
        {
            title: '分区库存总量(GB)',
            key: 'fqkczl'
				},
        
        
      ],

      data1: [
        {
					kyfq: 'AZ01',
					ckID: {
            'aa':['11','22','33']
          },
					ckmc: {
            'bb':['coodytest1','coodytest2','coodytest3','coodytest4']
          },
          yplx: 'ssd',
          ckkykcl: '1000.00',
					fqkczl: '4000.00',
        },
        {
					kyfq: 'AZ02',
					ckID: {
            'aa':['aa1','bb']
          },
					ckmc: {
            'bb':['coodytest1','coodytest2','coodytest3','coodytest4']
          },
          yplx: 'ssd',
          ckkykcl: '1000.00',
					fqkczl: '4000.00',
        },
        {
					kyfq: 'AZ03',
					ckID: {
            'aa':['@@2','bb']
          },
					ckmc: {
            'bb':['coodytest1','coodytest2','coodytest3','coodytest4']
          },
          yplx: 'ssd',
          ckkykcl: '1000.00',
					fqkczl: '4000.00',
        },
        {
					kyfq: 'AZ01',
					ckID: {
            'aa':['@@3','bb']
          },
					ckmc: {
            'bb':['coodytest1','coodytest2','coodytest3','coodytest4']
          },
          yplx: 'ssd',
          ckkykcl: '1000.00',
					fqkczl: '4000.00',
        },
        {
					kyfq: 'AZ01',
					ckID: {
            'aa':['@@4','bb']
          },
				  ckmc: {
            'bb':['coodytest1','coodytest2','coodytest3','coodytest4']
          },
          yplx: 'ssd',
          ckkykcl: '1000.00',
					fqkczl: '4000.00',
        },
        {
					kyfq: 'AZ01',
					ckID: {
            'aa':['@@5','bb']
          },
					ckmc: {
            'bb':['coodytest1','coodytest2','coodytest3','coodytest4']
          },
          yplx: 'ssd',
          ckkykcl: '1000.00',
					fqkczl: '4000.00',
        },
      ]
    }
  },
  methods: {
    handlespan({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0 && columnIndex === 0) {
        return {
          rowspan: 4,
          colspan: 1
        };
      }else if(rowIndex === 1 && columnIndex === 0){
        return {
          rowspan: 0,
          colspan: 0
        };
      }
      if(rowIndex === 0 && columnIndex === 3){
        return {
          rowspan: 2,
          colspan: 1
        }
      }else if(rowIndex === 1 && columnIndex === 3){
        return {
          rowspan: 0,
          colspan: 0
        }
      }
      if(rowIndex === 2 && columnIndex === 3){
        return [2,1]
      }else if(rowIndex === 3 && columnIndex === 3){
        return [0,0]
      }
    },
    info() {  
      console.log(this.$route.params)
      this.activeName=this.$route.params.activeName;
      this.opennames=this.$route.params.opennames;
      this.sl=12000.00;   
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
<style>
.ckid>ul>li:last-child{
  border-bottom: none!important;
}

</style>
