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
              <FormItem label="需求编号:" label-position="left">
                <Input size="default"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="10">
            <Col span="8">
              <FormItem label="需求名称:" label-position="left">
                <Input size="default"></Input>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="需求类别:" label-position="left">
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
  name: 'xuqiuxinxiguanli',
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
          title: '租户ID',
          key: 'name'
        },
        {
          title: '项目编号',
          key: 'xmbh'
        },
        {
          title: '需求编号',
          key: 'xqbh'
        },
        {
          title: '项目类型',
          key: 'xmlb',
          render: (h, params) => {
            return h(
              'a',
              {
                props: {
                  type: 'primary'
                },
                on: {
                  click: () => {}
                }
              },
              params.row.xmlb
            )
          }
        },

        {
          title: '操作',
          key: 'action',
          width: '200',
          render: (h, params) => {
            return h(
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
                    this.$router.push({ name: 'chakanxinxi', params: params })
                  }
                }
              },
              '查看'
            )
          }
        }
      ],
      data1: [
        {
          name: '10020001',
          xmbh: 'CCB-001',
          xmzbq: '云南政务',
          ssxq: 10,
          sszxt: 10,
          xmlb: '扩容',
          xmzt: '已上线',
          date: '2016-10-03',
          xqbh: '1111'
        },
        {
          name: '10020002',
          xmbh: 'CCB-002',
          xmzbq: '云南政务',
          ssxq: 10,
          sszxt: 10,
          xmlb: '扩容',
          xmzt: '已上线',
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
          xqbh: '222'
        },
        {
          name: '10020003',
          xmbh: 'CCB-003',
          xmzbq: '云南政务',
          ssxq: 10,
          sszxt: 10,
          xmlb: '扩容',
          xmzt: '已上线',
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02',
          xqbh: '333'
        },
        {
          name: '10020004',
          xmbh: 'CCB-004',
          xmzbq: '云南政务',
          ssxq: 10,
          sszxt: 10,
          xmlb: '扩容',
          xmzt: '已上线',
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04',
          xqbh: '4444'
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
