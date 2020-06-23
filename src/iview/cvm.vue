<template>
  <Row>
    <Col span="5">
      <menumode :activeName="activeName" :opennames="opennames"></menumode>
    </Col>
    <Col span="19">
      <card>
        <p slot="title" style="text-align:left">筛选项</p>
        <Row :gutter="10">
          <Col span="5">
            <Select
              size="default"
              placrholder="全部产品项"
              style="text-align: left;"
            >
              <Option value="1">11</Option>
              <Option value="2">222</Option>
            </Select>
          </Col>
        </Row>
      </card>
      <Card style="margin-top: 10px;">
        <p slot="title" style="text-align:left">数据列表</p>
        <!-- :span-method='handlespan' -->
        <Table
          border
          :columns="columns1"
          :data="data1"
          size="small"
          placement="top"
        >
        </Table>
      </Card>
      <ckModal :ckmodelValue="ckmodelValue"></ckModal>

      <Page
        :total="100"
        show-sizer
        style="margin-top: 10px;"
        type="flex"
        justify="end"
        class-name="pagination-contain"
      />
    </Col>
  </Row>
</template>

<script>
import Menumode from "@/iview/index";
import ckModal from "@/components/ckModal";
import { product } from "../api/product";
export default {
  name: "cvm",
  components: {
    Menumode,
    ckModal
  },
  data() {
    return {
      ckmodelValue: false,
      selectData: "",
      name: "",
      code: "",
      selectData: "",
      columns1: [
        {
          title: "产品项",
          key: "cpx",
          render: (h, params) => {
            return h("div", [
              h(
                "ul",
                this.data2.map(item => {
                  return h(
                    "li",
                    {
                      style: {
                        height: "40px",
                        listStyle: "none",
                        marginLeft: "-40px",
                        marginRight: "-40px",
                        borderBottom: "1px solid #e8eaec",
                        textAlign: "center",
                        lineHeight: "40px"
                      }
                    },
                    item.cpx
                  );
                })
              )
            ]);
          }
        },
        {
          title: "可用分区",
          key: "kyfq"
        },
        {
          title: "分区库存量",
          key: "fqkcl"
        },
        {
          title: "库存总量",
          key: "kczl"
        }
      ],

      data2: [
        {
          cpx: "CPU  (核)",
          kyfq: "AZ01",
          fqkcl: "1000.00",
          kczl: "4000.00"
        },
        {
          cpx: "",
          kyfq: "AZ01",
          fqkcl: "1000.00",
          kczl: ""
        },
        {
          cpx: "Storage(GB)",
          kyfq: "AZ01",
          fqkcl: "1000.00",
          kczl: "4000.00"
        },
        {
          cpx: "Memory(GB)",
          kyfq: "AZ01",
          fqkcl: "1000.00",
          kczl: "4000.00"
        }
      ],
      data1: [
        {
          HostAsset: "TYSV17103S28",
          CPU: 48.0,
          AvailableCPU: 39.0,
          HostStatus: "NORMAL",
          Storage: 2452,
          AvailableStorage: 1672,
          HostIp: "10.18.0.139",
          AvailableMemory: 101.0,
          Memory: 116.0,
          NetworkType: "CLASSIC",
          Placement: {
            Zone: 50040001
          }
        },
        {
          HostAsset: "TYSV17103S2A",
          CPU: 48.0,
          AvailableCPU: 47.0,
          HostStatus: "NORMAL",
          Storage: 2452,
          AvailableStorage: 2400,
          HostIp: "10.18.0.141",
          AvailableMemory: 115.0,
          Memory: 116.0,
          NetworkType: "CLASSIC",
          Placement: {
            Zone: 50040001
          }
        },
        {
          HostAsset: "TYSV17103S2F",
          CPU: 48.0,
          AvailableCPU: 47.0,
          HostStatus: "NORMAL",
          Storage: 2452,
          AvailableStorage: 2400,
          HostIp: "10.18.0.140",
          AvailableMemory: 115.0,
          Memory: 116.0,
          NetworkType: "CLASSIC",
          Placement: {
            Zone: 50040001
          }
        },
        {
          HostAsset: "TYSV17103S45",
          CPU: 48.0,
          AvailableCPU: 45.0,
          HostStatus: "NORMAL",
          Storage: 2452,
          AvailableStorage: 2296,
          HostIp: "10.18.1.14",
          AvailableMemory: 113.0,
          Memory: 116.0,
          NetworkType: "VPC",
          Placement: {
            Zone: 50040001
          }
        },
        {
          HostAsset: "TYSV1811005M",
          CPU: 80.0,
          AvailableCPU: 79.0,
          HostStatus: "NORMAL",
          Storage: 5400,
          AvailableStorage: 5338,
          HostIp: "10.18.0.5",
          AvailableMemory: 185.5234375,
          Memory: 186.5234375,
          NetworkType: "CLASSIC",
          Placement: {
            Zone: 50040001
          }
        },
        {
          HostAsset: "TYSV18110356",
          CPU: 80.0,
          AvailableCPU: 77.0,
          HostStatus: "NORMAL",
          Storage: 5400,
          AvailableStorage: 5214,
          HostIp: "10.18.0.4",
          AvailableMemory: 184.5,
          Memory: 187.5,
          NetworkType: "CLASSIC",
          Placement: {
            Zone: 50040001
          }
        }
      ]
    };
  },
  methods: {
    handlespan({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0 && columnIndex === 0) {
        return {
          rowspan: 2,
          colspan: 1
        };
      } else if (rowIndex === 1 && columnIndex === 0) {
        return {
          rowspan: 0,
          colspan: 0
        };
      }
      if (rowIndex === 0 && columnIndex === 3) {
        return {
          rowspan: 2,
          colspan: 1
        };
      } else if (rowIndex === 1 && columnIndex === 3) {
        return {
          rowspan: 0,
          colspan: 0
        };
      }
      if (rowIndex === 2 && columnIndex === 3) {
        return [2, 1];
      } else if (rowIndex === 3 && columnIndex === 3) {
        return [0, 0];
      }
    },
    info() {
      product()
        .then(res => {
          console.log(res, "222");
        })
        .catch(err => {});
      console.log(this.$route.params);
      this.activeName = this.$route.params.activeName;
      this.opennames = this.$route.params.opennames;
    },
    handleSubmit() {
      console.log(this.selectData, this.name, this.code);
    }
  },
  created() {
    this.info();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
