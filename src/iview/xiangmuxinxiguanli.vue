<template>
  <Row>
    <Col span="5">
      <menumode :activeName="activeName" :opennames="opennames"></menumode>
    </Col>
    <Col span="19">
      <card>
        <p slot="title" style="text-align:left">筛选项</p>
        <Form :label-width="110">
          <Row :gutter="2">
            <Col span="8">
              <FormItem label="租户UID:" label-position="left">
                <Input size="default"></Input>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="项目编号:" label-position="left">
                <Select
                  size="default"
                  style="width:'80px';text-align: left;"
                  v-model="xmbhData"
                >
                  <Option value="1">11</Option>
                  <Option value="2">22</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="项目名称:" label-position="left">
                <Input size="default"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="10">
            <Col span="8">
              <FormItem label="项目组标签:" label-position="left">
                <Select
                  size="default"
                  style="width:'80px';text-align: left;"
                  v-model="xmzbqData"
                >
                  <Option value="1">11</Option>
                  <Option value="2">22</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="项目状态:" label-position="left">
                <Select
                  size="default"
                  style="width:'80px';text-align: left;"
                  v-model="xmztData"
                >
                  <Option value="1">11</Option>
                  <Option value="2">22</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="8">
              <Button type="primary" size="default">查询</Button>
            </Col>
          </Row>
        </Form>
      </card>
      <Card style="margin-top: 10px;">
        <p slot="title" style="text-align:left">数据列表</p>
        <Table border :columns="columns1" :data="data1" size="small"> </Table>
      </Card>
      <Row type="flex" justify="end">
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
import Menumode from '@/iview/index';
export default {
  name: 'xiangmuxinxiguanli',
  components: {
    Menumode
  },
  data () {
    return {
      selectData: '',
      xmbhData: '',
      xmzbqData: '',
      xmztData: '',
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '租户ID',
          key: 'name',
          width: '90'
        },
        {
          title: '项目编号',
          key: 'xmbh',
          width: '110'
        },
        {
          title: '项目组标签',
          key: 'xmzbq',
          width: '110'
        },
        {
          title: '项目名称',
          key: 'xmname',
          width: '110'
        },
        {
          title: '所属需求',
          key: 'ssxq',
          width: '110'
        },
        {
          title: '所属子系统',
          key: 'sszxt',
          width: '110'
        },
        {
          title: '项目类别',
          key: 'xmlb',
          width: '110'
        },
        {
          title: '项目状态',
          key: 'xmzt',
          width: '110'
        },
        {
          title: '操作',
          key: 'action',
          width: '200',
          render: (h, params) => {
            return h('div', [
              h(
                'a',
                {
                  props: {
                    type: 'primary'
                  },
                  style: {
                    marginRight: '10px'
                  },
                  on: {
                    click: () => {
                      console.log(params)
                      this.$Message.success(params.row.name)
                    }
                  }
                },
                '查看'
              ),
              h(
                'a',
                {
                  props: {
                    type: 'primary'
                  },
                  style: {
                    marginRight: '10px'
                  },
                  on: {
                    click: () => {
                      this.$Message.success(params.row.name)
                    }
                  }
                },
                '编辑'
              ),
              h(
                'a',
                {
                  props: {
                    type: 'primary'
                  },
                  style: {
                    marginRight: '10px'
                  },
                  on: {
                    click: () => {
                      this.$Message.success(params.row.name)
                    }
                  }
                },
                '查看运营指标'
              )
            ])
          }
        }
      ],
      data1: [
        {
          name: '10020001',
          xmbh: 'CCB-001',
          xmzbq: '云南政务',
          xmname: 'XXXXXX项目',
          ssxq: 10,
          sszxt: 10,
          xmlb: '上云事项',
          xmzt: '已上线',
          date: '2016-10-03',
          zhanghao: '1111'
        },
        {
          name: '10020002',
          xmbh: 'CCB-002',
          xmzbq: '云南政务',
          xmname: 'XXXXXX项目',
          ssxq: 10,
          sszxt: 10,
          xmlb: '上云事项',
          xmzt: '已上线',
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
          zhanghao: '222'
        },
        {
          name: '10020003',
          xmbh: 'CCB-003',
          xmzbq: '云南政务',
          xmname: 'XXXXXX项目',
          ssxq: 10,
          sszxt: 10,
          xmlb: '上云事项',
          xmzt: '已上线',
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
          zhanghao: '333'
        },
        {
          name: '10020004',
          xmbh: 'CCB-004',
          xmzbq: '云南政务',
          xmname: 'XXXXXX项目',
          ssxq: 10,
          sszxt: 10,
          xmlb: '上云事项',
          xmzt: '已上线',
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          zhanghao: '4444'
        }
      ]
    }
  },
  methods: {
    info () {
      console.log(this.$route.params)
      this.activeName = this.$route.params.activeName
      this.opennames = this.$route.params.opennames
    }
  },
  created () {
    this.info()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
