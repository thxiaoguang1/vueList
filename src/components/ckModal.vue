<template>
  <div class="modal">
    <Modal
    v-model='ckmodelValue'
    title="管理客户">
      <Table
        :data='data'
        :columns='columns'
        size='default'
        border
      >
        
      </Table>
       

     
     
    </Modal>
  </div>
</template>

<script>

export default {
  name: 'ckmodel',
  props:['ckmodelValue'],
  data () {
    return {
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

</style>
