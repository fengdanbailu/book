<template>
  <div class="container uac-agentAdmin" v-loading="loading">
    <el-card>
      <el-tabs type="card" v-model="activeType">
         <el-tab-pane
           v-for="(item, index) in TABPANEL"
           :key="index"
           :label="item.label"
           :name="item.type">
          <div v-show="activeType==TABPANEL[0].type">
            <el-row>
               <el-button type="primary" @click="createAgent()" size="medium" class="pull-right">Create</el-button>
            </el-row>

            <template v-for="item in addAgentList">
              <el-row class="area-block" v-show="agentAdd">
               <el-col :span="24">
                 <el-row class="title-line">
                   <el-col :span="6" style="padding-top: 10px;">Add Config</el-col>
                    <el-col :span="18">
                    </el-col>
                 </el-row>

                 <el-row>
                  <el-col :span="6">
                    <span class="label-right">Agent名称</span>
                    <span class="not-null">*</span>
                  </el-col>
                  <el-col :span="12"> 
                   <el-input size="small" v-model="item.name" placeholder="名称"></el-input>
                  </el-col>
                </el-row>
            
                 <el-row>
                  <el-col :span="6">
                    <span class="label-right">版本</span>
                    <span class="not-null">*</span>
                  </el-col>
                  <el-col :span="12"> 
                   <el-input size="small"  v-model="item.version" placeholder="版本"></el-input>
                  </el-col>
                </el-row>
            
                 <el-row>
                  <el-col :span="6">
                    <span class="label-right">配置文件版本</span>
                    <span class="not-null">*</span>
                  </el-col>
                  <el-col :span="12">
                   <el-input size="small" v-model="item.confversion" placeholder="配置文件版本"></el-input>
                  </el-col>
                 </el-row>
            
                 <el-row>
                   <el-col :span="6"><span class="label-right">安装包下载路径</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" v-model="item.tarball" placeholder="安装包下载路径"></el-input></el-col>
                 </el-row>
            
                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">下发命令</span>
                     <span class="not-null">*</span>
                   </el-col>
                   <el-col :span="12">
                    <el-select size="small" v-model="item.cmd" placeholder="请选择命令" filterable>
                      <el-option v-for="subitem in AGENT_CMD" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                    </el-select>
                   </el-col>
                 </el-row>
            
                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">资源使用限制</span>
                     <span class="not-null">*</span>
                  </el-col>
                   <el-col :span="4">
                    <el-input size="small" v-model="item.cpu" placeholder="CPU">
                      <template slot="prepend">CPU (%)</template>
                    </el-input>
                   </el-col>
                   <el-col :span="4">
                    <el-input size="small" v-model="item.mem" placeholder="Mem">
                      <template slot="prepend">Mem (M)</template>
                    </el-input>
                   </el-col>
                   <el-col :span="2">
                     <el-col :span="24" class="el-select-append">Action</el-col>
                   </el-col>
                   <el-col :span="2">
                     <el-select size="small" v-model="item.rlimitaction" filterable>
                       <el-option v-for="subitem in AGENT_ACTION" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                     </el-select>
                   </el-col>
                 </el-row>
                 <el-row>
                   <el-button type="primary" size="small" @click="addSaveAgent()" style="float:right;">Add</el-button>
                   <span style="float:right;margin-right:8px;">&nbsp;</span>
                   <el-button type="primary" size="small" @click="agentAdd=false" style="float:right;">Cancel</el-button>
                 </el-row>
            
               </el-col>
             </el-row>
            </template>

            <template v-for="item in agentList">
             <el-row class="area-block">
               <el-col :span="24">
                 <el-row class="title-line">
                   <el-col :span="6" style="padding-top: 10px;">{{item.name}}</el-col>
                    <el-col :span="18">
                      <el-button @click="item.isEdit=true" size="small" class="pull-right">Edit</el-button>
                    </el-col>
                 </el-row>
               </el-col>
               <el-col :span="20">
                 <el-form :model="item" size="small" :rules="agentRules" label-width="300px">
                    <el-form-item label="版本" prop="version">
                      <el-input :disabled="!item.isEdit" v-model="item.version"></el-input>
                    </el-form-item>
                    <el-form-item label="配置文件版本" prop="confversion">
                      <el-input :disabled="!item.isEdit" v-model="item.confversion"></el-input>
                    </el-form-item>
                    <el-form-item label="安装包下载路径" prop="tarball">
                      <el-input :disabled="!item.isEdit" v-model="item.tarball"></el-input>
                    </el-form-item>
                    <el-form-item label="下发命令" prop="cmd">
                      <el-select :disabled="!item.isEdit" v-model="item.cmd"  filterable>
                        <el-option v-for="subitem in AGENT_CMD" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="资源使用限制" required>
                      <el-col :span="8">
                        <el-form-item prop="mem">
                          <el-input size="small" :disabled="!item.isEdit" v-model="item.cpu" placeholder="CPU">
                            <template slot="prepend">CPU (%)</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item prop="mem">
                          <el-input :disabled="!item.isEdit" v-model="item.mem" placeholder="Mem">
                            <template slot="prepend">Mem (M)</template>
                          </el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="3">
                        <el-col :span="24" class="el-select-append">Action</el-col>
                      </el-col>
                      <el-col :span="5">
                        <el-form-item prop="rlimitaction">
                          <el-select size="small" :disabled="!item.isEdit" v-model="item.rlimitaction" filterable>
                            <el-option v-for="subitem in AGENT_ACTION" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-form-item>
                 </el-form>
               </el-col>

                <el-col :span="24">
                 <el-row>
                   <el-button v-show="item.isEdit" @click="saveAgent(item)" type="primary" size="small" style="float:right;">Save</el-button>
                   <span style="float:right;margin-right:8px;">&nbsp;</span>
                   <el-button v-show="item.isEdit" @click="deleteAgent(item)" type="primary" size="small" style="float:right;">Delete</el-button>
                 </el-row>
               </el-col>
             </el-row>
            </template>
          </div>

           <div v-show="activeType==TABPANEL[1].type">
            <el-row>
               <el-button type="primary" @click="createBeaver()" size="medium" class="pull-right">Create</el-button>
            </el-row>

            <template v-for="item in addBeaverList">
              <el-row class="area-block" v-show="beaverAdd">
               <el-col :span="24">
                 <el-row class="title-line">
                   <el-col :span="6" style="padding-top: 10px;">Add UBeaver Config</el-col>
                    <el-col :span="18">
                    </el-col>
                 </el-row>

                 <el-row>
                  <el-col :span="6">
                    <span class="label-right">日志路径</span>
                    <span class="not-null">*</span>
                  </el-col>
                  <el-col :span="12"> 
                   <el-input size="small" v-model="item.file_name" placeholder="日志路径"></el-input>
                  </el-col>
                </el-row>

                 <el-row>
                  <el-col :span="6">
                    <span class="label-right">路径是否为正则</span>
                    <span class="not-null">*</span>
                  </el-col>
                  <el-col :span="12">
                    <el-switch  v-model="item.is_regex" ></el-switch>
                  </el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">类型</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" v-model="item.type"  placeholder="类型"></el-input>
                   <el-col :span="24" style="margin-top:10px;">
                     日志类型: 根据文件类型进行填写;<br>
                     tomcat/logs目录下的日志填写tomcat; nginx/logs目录下的日志填写nginx;tomcat目录下架构的日志填写framework; nodejs目录下的填写nodejs; <br>
                     如果均不属于上述类型,建议联系DevOps进行添加,如果紧急,可填写other;
                   </el-col>
                   </el-col>
                  
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">日志开头匹配</span></el-col>
                   <el-col :span="12"> <el-input size="small" v-model="item.regex"  placeholder="日志开头匹配" ></el-input>
                    <el-col :span="24" style="margin-top:10px;">
                      tomcat日志开头匹配规则:^\d{4}-\d{2}-\d{2}
                    </el-col>
                   </el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">传输方式</span>
                     <span class="not-null">*</span>
                   </el-col>
                   <el-col :span="12">
                    <el-select size="small" v-model="item.reporter" placeholder="请选择传输方式" filterable>
                      <el-option v-for="subitem in BEAVER_TYPE" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                    </el-select>
                    <el-col :span="24" style="margin-top:10px;">
                     默认使用Kafka
                    </el-col>
                   </el-col>
                 </el-row>

                 <el-row v-show="item.reporter=='metaq'">
                   <el-col :span="6"><span class="label-right">ZK_ROOT</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" v-model="item.zk_root" placeholder="ZK_ROOT"></el-input></el-col>
                 </el-row>
                 <el-row v-show="item.reporter=='kafka'">
                   <el-col :span="6"><span class="label-right">Brokers</span></el-col>
                   <el-col :span="12"> <el-input size="small"  v-model="item.brokers" placeholder="Brokers"></el-input>
                    <el-col :span="24" style="margin-top:10px;">
                      会默认生成日志采集对应的Brokers,理论上不需要修改
                    </el-col>
                   </el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">Topic</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" v-model="item.topic" placeholder="Topic" ></el-input>
                    <el-col :span="24" style="margin-top:10px;">
                      Topic的规则如下:<br>
                      "环境_产品线_类型"<br>
                      例如: "pre_zuche_tomcat","prod_lucky_nginx","prod_ucar_framework"
                    </el-col>
                   </el-col>
                 </el-row>

                 <el-row>
                   <el-button  @click="addSaveBeaver()" type="primary" size="small" style="float:right;">Add</el-button>
                   <span style="float:right;margin-right:8px;">&nbsp;</span>
                   <el-button  @click="beaverAdd=false" type="primary" size="small" style="float:right;">Cancel</el-button>
                 </el-row>
            
               </el-col>
             </el-row>
            </template>
            
            <template v-for="item in beaverList">
             <el-row class="area-block">
               <el-col :span="24">
                 <el-row class="title-line">
                   <el-col :span="6" style="padding-top: 10px;">{{item.file_name}}</el-col>
                    <el-col :span="18">
                      <el-button @click="item.isEdit=true" size="small" class="pull-right">Edit</el-button>
                    </el-col>
                 </el-row>

                 <el-row>
                  <el-col :span="6">
                    <span class="label-right">日志路径</span>
                    <span class="not-null">*</span>
                  </el-col>
                  <el-col :span="12"> 
                   <el-input size="small" :disabled="true" v-model="item.file_name" ></el-input>
                  </el-col>
                </el-row>

                 <el-row>
                  <el-col :span="6">
                    <span class="label-right">路径是否为正则</span>
                    <span class="not-null">*</span>
                  </el-col>
                  <el-col :span="12">
                    <el-switch :disabled="true" v-model="item.is_regex" ></el-switch>
                  </el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">类型</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.type" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">日志开头匹配</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.regex" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">传输方式</span>
                     <span class="not-null">*</span>
                   </el-col>
                   <el-col :span="12">
                    <el-select size="small" :disabled="!item.isEdit" v-model="item.reporter" placeholder="请选择传输方式" filterable>
                      <el-option v-for="subitem in BEAVER_TYPE" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                    </el-select>
                   </el-col>
                 </el-row>

                 <el-row v-show="item.reporter=='metaq'">
                   <el-col :span="6"><span class="label-right">ZK_ROOT</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.zk_root" ></el-input></el-col>
                 </el-row>
                 <el-row v-show="item.reporter=='kafka'">
                   <el-col :span="6"><span class="label-right">Brokers</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.brokers" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">Topic</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.topic" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-button v-show="item.isEdit" @click="saveBeaver(item)" type="primary" size="small" style="float:right;">Save</el-button>
                   <span style="float:right;margin-right:8px;">&nbsp;</span>
                   <el-button v-show="item.isEdit" @click="deleteBeaver(item)" type="primary" size="small" style="float:right;">Delete</el-button>
                 </el-row>

               </el-col>
             </el-row>
            </template>

           </div>

           <div v-show="activeType==TABPANEL[2].type">
            <el-row>
               <el-button type="primary" @click="createIris()" size="medium" class="pull-right">Create</el-button>
            </el-row>

            <template v-for="item in addIrisList">
              <el-row class="area-block" v-show="irisAdd">
               <el-col :span="24">
                 <el-row class="title-line">
                   <el-col :span="6" style="padding-top: 10px;">Add UIris Plugin Config</el-col>
                    <el-col :span="18">
                    </el-col>
                 </el-row>

                 <el-row>
                  <el-col :span="6">
                    <span class="label-right">插件名称</span>
                    <span class="not-null">*</span>
                  </el-col>
                  <el-col :span="12"> 
                   <el-input size="small" v-model="item.plugin_name" ></el-input>
                  </el-col>
                </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">插件版本</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" v-model="item.plugin_version" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">插件资源版本</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" v-model="item.conf_version" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">Assitant版本</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" v-model="item.assitant_version" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">插件运行用户</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small"  v-model="item.user" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">插件运行参数</span></el-col>
                   <el-col :span="12"> <el-input size="small" v-model="item.start_param" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">插件是否支持重载</span>
                     <span class="not-null">*</span>
                   </el-col>
                   <el-col :span="12">
                    <el-select size="small" v-model="item.reload_enable" filterable>
                      <el-option v-for="subitem in UIRIS_SUPPORT" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                    </el-select>
                   </el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">插件状态</span>
                     <span class="not-null">*</span>
                   </el-col>
                   <el-col :span="12">
                    <el-select size="small" v-model="item.plugin_state" filterable>
                      <el-option v-for="subitem in UIRIS_STATUS" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                    </el-select>
                   </el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">资源使用限制</span>
                     <span class="not-null">*</span>
                  </el-col>
                   <el-col :span="6">
                    <el-input size="small" v-model="item.limit_cpu" placeholder="CPU">
                      <template slot="prepend">CPU (%)</template>
                    </el-input>
                   </el-col>
                   <el-col :span="6">
                    <el-input size="small" v-model="item.limit_mem" placeholder="Mem">
                      <template slot="prepend">Mem (M)</template>
                    </el-input>
                   </el-col>
                 </el-row>

                 <el-row>
                   <el-button  @click="addSaveIris()" type="primary" size="small" style="float:right;">Add</el-button>
                   <span style="float:right;margin-right:8px;">&nbsp;</span>
                   <el-button  @click="irisAdd=false" type="primary" size="small" style="float:right;">Cancel</el-button>
                 </el-row>
            
               </el-col>
             </el-row>
            </template>

            <template v-for="item in irisList">
             <el-row class="area-block">
               <el-col :span="24">
                 <el-row class="title-line">
                   <el-col :span="6" style="padding-top: 10px;">{{item.plugin_name}}</el-col>
                    <el-col :span="18">
                      <el-button @click="item.isEdit=true" size="small" class="pull-right">Edit</el-button>
                    </el-col>
                 </el-row>

                 <el-row>
                  <el-col :span="6">
                    <span class="label-right">插件名称</span>
                    <span class="not-null">*</span>
                  </el-col>
                  <el-col :span="12"> 
                   <el-input size="small" :disabled="true" v-model="item.plugin_name" ></el-input>
                  </el-col>
                </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">插件版本</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.plugin_version" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">插件资源版本</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.conf_version" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">Assitant版本</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.assitant_version" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">插件运行用户</span><span class="not-null">*</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.user" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6"><span class="label-right">插件运行参数</span></el-col>
                   <el-col :span="12"> <el-input size="small" :disabled="!item.isEdit" v-model="item.start_param" ></el-input></el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">插件是否支持重载</span>
                     <span class="not-null">*</span>
                   </el-col>
                   <el-col :span="12">
                    <el-select size="small" :disabled="!item.isEdit" v-model="item.reload_enable" filterable>
                      <el-option v-for="subitem in UIRIS_SUPPORT" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                    </el-select>
                   </el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">插件状态</span>
                     <span class="not-null">*</span>
                   </el-col>
                   <el-col :span="12">
                    <el-select size="small" :disabled="!item.isEdit" v-model="item.plugin_state" filterable>
                      <el-option v-for="subitem in UIRIS_STATUS" :key="subitem.id" :label="subitem.label" :value="subitem.id"></el-option>
                    </el-select>
                   </el-col>
                 </el-row>

                 <el-row>
                   <el-col :span="6">
                     <span class="label-right">资源使用限制</span>
                     <span class="not-null">*</span>
                  </el-col>
                   <el-col :span="6">
                    <el-input size="small" v-model="item.limit_cpu" type="number" placeholder="CPU">
                      <template slot="prepend">CPU (%)</template>
                    </el-input>
                   </el-col>
                   <el-col :span="6">
                    <el-input size="small" v-model="item.limit_mem" type="number" placeholder="Mem">
                      <template slot="prepend">Mem (M)</template>
                    </el-input>
                   </el-col>
                 </el-row>

                 <el-row>
                   <el-button v-show="item.isEdit" @click="saveIris(item)" type="primary" size="small" style="float:right;">Save</el-button>
                   <span style="float:right;margin-right:8px;">&nbsp;</span>
                   <el-button v-show="item.isEdit" @click="deleteIris(item)" type="primary" size="small" style="float:right;">Delete</el-button>
                 </el-row>

               </el-col>
             </el-row>
            </template>

           </div>
         </el-tab-pane>
       </el-tabs>
    </el-card>
  </div>
</template>
<script>
// components

import IndexPage from '@/components/Page/IndexLayout'
import { agentAdminAPI } from '@/api/uac'
import { mapGetters } from 'vuex'
import { Message } from 'element-ui'
import { base64 } from '../utils/base64'
import { getDate } from '../utils/date'

export const TABPANEL = [
 { label : 'Agent版本配置', type : "agent"},
 { label : 'UBeaver采集配置', type : "beaver"},
 { label : 'UIris插件配置', type : "iris"}
]
export const AGENT_CMD = [
  {id:"start",label:"start"},
  {id:"stop",label:"stop"},
]

export const AGENT_ACTION = [
  {id:"stop",label:"stop"},
  {id:"start",label:"start"},
]

export const BEAVER_TYPE = [
  {id:"kafka",label:"kafka"},
  {id:"metaq",label:"metaq"},
]

export const UIRIS_SUPPORT = [
  {id:true,label:"true"},
  {id:false,label:"false"},
]

export const UIRIS_STATUS = [
  {id:"running",label:"running"},
  {id:"stopped",label:"stopped"},
]

export default {
  name: 'agentAdmin',
  components: {
    IndexPage,
    agentAdminAPI,
    base64
  },
  data() {
    return {
      TABPANEL,
      AGENT_CMD,
      AGENT_ACTION,
      BEAVER_TYPE,
      UIRIS_SUPPORT,
      UIRIS_STATUS,
      plugin: '',
      activeType : TABPANEL[0]["type"],
      agentList:[],
      agentAdd:false,
      addAgentList:[],
      agentRules:{
        name:[
          {required: true, message: '请输入Agent名称', trigger: 'blur'},
        ],
        version:[
          {required: true, message: '请输入版本', trigger: 'blur'},
        ],
        confversion:[
          {required: true, message: '请输入配置文件版本', trigger: 'blur'},
        ],
        tarball:[
          {required: true, message: '请输入安装包下载路径', trigger: 'blur'},
        ],
        cmd:[
          {required: true, message: '请选择下发命令', trigger: 'change'},
        ],
        cpu:[
          {required: true, message: '请输入CPU使用限制', trigger: 'blur'},
        ],
        mem:[
          {required: true, message: '请输入内存使用限制', trigger: 'blur'},
        ],
        rlimitaction:[
          {required: true, message: '请选择动作', trigger: 'change'},
        ],

      },
      beaverAdd:false,
      beaverList:[],
      addBeaverList:[],
      irisList:[],
      irisAdd:false,
      addIrisList:[],
      loading:false
    }
  },
  computed: {
    ...mapGetters(['selectedTreePath']),

  },
  watch: {
      selectedTreePath() {
        this.initPageData()
      },
      activeType(){
        this.initPageData()
      }
  },
  methods: {
    initPageData(){
      if(this.selectedTreePath.join("/")===""){
        Message({
            message: "请选择服务树节点",
            type: 'warning',
            duration: 5 * 1000
        })
        return
      }
      if(this.activeType==TABPANEL[0].type){
        this.getAgent();
      }
      else if(this.activeType==TABPANEL[1].type){
        this.getBeaver();
      }
      else if(this.activeType==TABPANEL[2].type){
        this.getIris();
      }
      else{
        console.log("type error")
      }
    },
    trim(str){
      try{
        if(str==null){
          return ""
        }
        else{
          return str.trim()
        }
      }
      catch(err){
        return ""
      }
    },
    createAgent(){
      this.addAgentList=[{
        name: "",
        version: "",
        confversion: "",
        cmd: "start",
        cpu: "",
        mem: "",
        rlimitaction: "stop",
        tarball: "",
      }]
      this.agentAdd=true
    },
    addSaveAgent(){
      this.saveAgent(this.addAgentList[0])
    },
    saveAgent(data){
      var json=JSON.parse(JSON.stringify(data))
      const trim=this.trim
      if(["name","version","confversion","cmd","cpu","mem","rlimitaction","tarball"].some(key=>trim(json[key])=="")){
        Message({
            message: "agent配置不能为空",
            type: 'warning',
            duration: 5 * 1000
        })
        return
      }
      if(this.selectedTreePath.join("/")===""){
        Message({
            message: "获取服务树节点异常",
            type: 'warning',
            duration: 5 * 1000
        })
        return
      }
      const agent_config = {
        'name': trim(json.name),
        'version': trim(json.version),
        'confversion': trim(json.confversion),
        'cmd': json.cmd,
        'cpu': trim(json.cpu),
        'mem': trim(json.mem),
        'rlimitaction': json.rlimitaction,
        'tarball': trim(json.tarball),
        'md5': ''
      };
      const item={
        agent_name:json.name,
        agent_info:JSON.stringify(agent_config)
      }
      this.updateAgent(item)
    },
    deleteAgent(item){
      if(this.selectedTreePath.join("/")===""){
        Message({
            message: "获取服务树节点异常",
            type: 'error',
            duration: 5 * 1000
        })
        return
      }
      this.$confirm('是否删除Agent配置?', '确认操作', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var json=JSON.parse(JSON.stringify(item));
          this.delAgent({agent_name:json.name});
        }).catch(() => {
          this.$message({
          type: 'warning',
          message: '已取消'
        })
      });
    
    },
    createBeaver(){
      this.addBeaverList=[{
        zk_root: "",
        brokers: "",
        regex:"",
        file_name: "",
        is_regex:false,
        type: "",
        reporter: "kafka",
        topic: "",
      }]
      this.beaverAdd=true
    },
    addSaveBeaver(){
      var json=JSON.parse(JSON.stringify(this.addBeaverList[0]))
      const trim=this.trim
      if(["file_name","type","topic"].some(key=>trim(json[key])=="")){
        Message({
            message: "日志路径、类型和Topic不能为空",
            type: 'warning',
            duration: 5 * 1000
          })
        return
      }
      if(trim(json.reporter)=="metaq" && trim(json.zk_root)=="" ){
        Message({
            message: "metaq zk_root不能为空",
            type: 'warning',
            duration: 5 * 1000
        })
        return
      }
      if(this.selectedTreePath.join("/")===""){
        Message({
            message: "获取服务树节点异常",
            type: 'warning',
            duration: 5 * 1000
        })
        return
      }
      var utree_path=this.selectedTreePath.join("/");
      if(["UCARInc-PROD/UCAR","UCARInc-PROD/ZUCHE","UCARInc-PROD/MMC","UCARInc-PROD/COMMON"].some(key=>utree_path.indexOf(key) != -1)){
        if(json["brokers"] != ""){
          Message({
            message: "ZUCHE,MMC,UCAR,COMMON产品线生产环境Brokers输入必须为空",
            type: 'warning',
            duration: 5 * 1000
          })
          return
        }
      }
      var logconf_obj = {
        'type': trim(json.type),
        'regex': trim(json.regex),
        'reporter': trim(json.reporter),
        'topic': trim(json.topic),
        'queue_size': 64,
        'value': getDate().replace(/:/g,"_").replace(/ /g,"_"),
        'file_name':trim(json.file_name)
      };
      if(json.is_regex){
        logconf_obj["file_name_pattern"]=base64.encode(logconf_obj["file_name"])
      }
      else{
        logconf_obj["file_name"]=logconf_obj["file_name"]
      }
      logconf_obj["regex"]=base64.encode(logconf_obj["regex"])
      if(json.reporter=="kafka"){
        logconf_obj["brokers"]=trim(json.brokers)
        logconf_obj["use_gzip"]=0
      }
      if(json.reporter=="metaq"){
        logconf_obj["zk_root"]=trim(json.zk_root)
        logconf_obj["keepalive"]=30
      }
      const item={
        logconf:JSON.stringify(logconf_obj)
      }
      this.addBeaver(item)
    },
    saveBeaver(data){
      var json=JSON.parse(JSON.stringify(data))
      const trim=this.trim
      if(["type","topic"].some(key=>trim(json[key])=="")){
        Message({
            message: "类型和Topic不能为空",
            type: 'warning',
            duration: 5 * 1000
        })
        return
      }
      if(trim(json.reporter)=="metaq" && trim(json.zk_root)=="" ){
        Message({
            message: "metaq zk_root不能为空",
            type: 'warning',
            duration: 5 * 1000
        })
        return
      }
      if(this.selectedTreePath.join("/")===""){
        Message({
            message: "获取服务树节点异常",
            type: 'warning',
            duration: 5 * 1000
        })
        return
      }
      var utree_path=this.selectedTreePath.join("/");
      if(["UCARInc-PROD/UCAR","UCARInc-PROD/ZUCHE","UCARInc-PROD/MMC","UCARInc-PROD/COMMON"].some(key=>utree_path.indexOf(key) != -1)){
        if(json["brokers"] != ""){
          Message({
            message: "ZUCHE,MMC,UCAR,COMMON产品线生产环境Brokers输入必须为空",
            type: 'warning',
            duration: 5 * 1000
          })
          return
        }
      }
      
      var logconf_obj = {
        'type': trim(json.type),
        'regex': trim(json.regex),
        'reporter': trim(json.reporter),
        'topic': trim(json.topic),
        'queue_size': 64,
        'value': getDate().replace(/:/g,"_").replace(/ /g,"_"),
      };
      if(json.is_regex){
        logconf_obj["file_name_pattern"]=base64.encode(trim(json.file_name))
      }
      else{
        logconf_obj["file_name"]=trim(json.file_name)
      }
      logconf_obj["regex"]=base64.encode(logconf_obj["regex"])
      if(json.reporter=="kafka"){
        logconf_obj["brokers"]=trim(json.brokers)
        logconf_obj["use_gzip"]=0
      }
      if(json.reporter=="metaq"){
        logconf_obj["zk_root"]=trim(json.zk_root)
        logconf_obj["keepalive"]=30
      }
      const item={
        logconf:JSON.stringify(logconf_obj)
      }
      this.updateBeaver(item)

    },
    deleteBeaver(item){
      if(this.selectedTreePath.join("/")===""){
        Message({
            message: "获取服务树节点异常",
            type: 'error',
            duration: 5 * 1000
        })
        return
      }
      this.$confirm('是否删除Beaver配置?', '确认操作', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var json=JSON.parse(JSON.stringify(item));
          var deleteJSON={
              file_name:json.is_regex?base64.encode(json.file_name):json.file_name,
              file_is_regex:json.is_regex?"1":"0"
            };
          this.delBeaver(deleteJSON);
        }).catch(() => {
          this.$message({
          type: 'warning',
          message: '已取消'
        })
      });
    },
    createIris(){
      this.addIrisList=[{
        plugin_name: "",
        plugin_version: "",
        conf_version: "",
        assitant_version: "",
        user: "",
        start_param: "",
        reload_enable: false,
        plugin_state: "running",
        limit_cpu: 0,
        limit_mem: 0
      }]
      this.irisAdd=true
    },
    cancelIris(){
      this.irisAdd=false
    },
    addSaveIris(){
      this.saveIris(this.addIrisList[0])
    },
    saveIris(data){
      var json=JSON.parse(JSON.stringify(data))
      const trim=this.trim
      if(["plugin_name","plugin_version","conf_version","assitant_version","user","plugin_state"].some(key=>trim(json[key])=="")){
        Message({
            message: "UIris插件配置不能为空",
            type: 'warning',
            duration: 5 * 1000
        })
        return
      }
    
      var uiris_plugincfg_obj = {
        'plugin_name': trim(json.plugin_name),
        'plugin_version': trim(json.plugin_version),
        'conf_version': trim(json.conf_version),
        'assitant_version': trim(json.assitant_version),
        'user': trim(json.user),
        'start_param': trim(json.start_param),
        'plugin_state': trim(json.plugin_state),
        'limit_cpu': parseInt(json.limit_cpu),
        'limit_mem': parseInt(json.limit_mem),
        'type': "plugin_go",
        'reload_enable': json.reload_enable,
      };
      const item={
        data:[uiris_plugincfg_obj]
      }
      this.updateIris(item)
    },
    deleteIris(item){
      if(this.selectedTreePath.join("/")===""){
        Message({
            message: "获取服务树节点异常",
            type: 'error',
            duration: 5 * 1000
        })
        return
      }
      this.$confirm('是否删除UIris插件配置?', '确认操作', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var json=JSON.parse(JSON.stringify(item));
          Message({
            message: "Not Support",
            type: 'warning',
            duration: 5 * 1000
          })
          return
        }).catch(() => {
          this.$message({
          type: 'warning',
          message: '已取消'
        })
      });

    },
    getAgent(){
      this.agentAdd=false;
      let option={
        path: this.selectedTreePath.join("/")
      }
      this.loading=true
      agentAdminAPI.agent.get(option).then(res => {
        if(res==null){
          res=[];
        }
        this.agentList=res.map(item=>{
          return{
            ...item,
            isEdit : false,
          }
        })
        this.loading=false
      })
    },
    updateAgent(item){
      let option={
        path: this.selectedTreePath.join("/"),
        agent_name:item.agent_name,
        agent_info:item.agent_info
      }
      this.loading=true;
      agentAdminAPI.agent.update(option).then(res => {
        if(res.status==1000){
          this.getAgent()
          Message({
            message: "操作成功",
            type: 'success',
            duration: 5 * 1000
          })
        }
        else{
          Message({
            message: res["msg"],
            type: 'error',
            duration: 5 * 1000
          })
        }
        this.loading=false;
      });
    },
    delAgent(item){
      let option={
        path: this.selectedTreePath.join("/"),
        agent_name:item.agent_name,
      }
      this.loading=true;
      agentAdminAPI.agent.del(option).then(res => {
        if(res.status==1000){
          this.getAgent()
          Message({
            message: "操作成功",
            type: 'success',
            duration: 5 * 1000
          })
        }
        else{
          Message({
            message: res["msg"],
            type: 'error',
            duration: 5 * 1000
          })
        }
        this.loading=false;
      });
    },
    getBeaver(){
      this.beaverAdd=false;
      let option={
        path: this.selectedTreePath.join("/"),
      }
      this.loading=true;
      agentAdminAPI.beaver.get(option).then(response => {
        var res = response.list;
        if(res==null){
          res=[];
        }
        this.beaverList=res.map(item=>{
          return{
            ...item,
            isEdit : false,
            zk_root: item.zk_root?item.zk_root:"",
            brokers: item.brokers?item.brokers:"",
            regex: item.regex?base64.decode(item.regex):"",
            file_name: item.file_name_pattern?base64.decode(item.file_name_pattern):item.file_name,
            is_regex: item.file_name_pattern?true:false
          }
        });
        this.loading=false;
      });
    },
    updateBeaver(item){
      let option={
        path: this.selectedTreePath.join("/"),
        logconf:item.logconf
      }
      this.loading=true;
      agentAdminAPI.beaver.update(option).then(res => {
        if(res.status==1000){
          this.getBeaver()
          Message({
            message: "操作成功",
            type: 'success',
            duration: 5 * 1000
          })
        }
        else{
          Message({
            message: res["msg"],
            type: 'error',
            duration: 5 * 1000
          })
        }
        this.loading=false;
      });
    },
    delBeaver(item){
      let option={
        path: this.selectedTreePath.join("/"),
        file_name:item.file_name,
        file_is_regex:item.file_is_regex
      }
      this.loading=true;
      agentAdminAPI.beaver.del(option).then(res => {
        if(res.status==1000){
          this.getBeaver()
          Message({
            message: "操作成功",
            type: 'success',
            duration: 5 * 1000
          })
        }
        else{
          Message({
            message: res["msg"],
            type: 'error',
            duration: 5 * 1000
          })
        }
        this.loading=false;
      });
    },
    addBeaver(item){
      let option={
        path: this.selectedTreePath.join("/"),
        logconf:item.logconf
      }
      this.loading=true;
      agentAdminAPI.beaver.add(option).then(res => {
        if(res.status==1000){
          this.getBeaver()
          Message({
            message: "操作成功",
            type: 'success',
            duration: 5 * 1000
          })
        }
        else{
          Message({
            message: res["msg"],
            type: 'error',
            duration: 5 * 1000
          })
        }
        this.loading=false;
      });
    },
    getIris(){
      this.irisAdd=false;
      let option={
        ns: "/"+this.selectedTreePath.join("/")
      }
      this.loading=true;
      agentAdminAPI.iris.get(option).then(res => {
        if(res.hasOwnProperty("data")&& res["data"]==null){
          res=[];
        }
        this.irisList=res.map(item=>{
          return{
            ...item,
            isEdit : false,
          }
        });
        this.loading=false;
      });
    },
    updateIris(item){
      let option={
        publish_ns: "/"+this.selectedTreePath.join("/"),
        data:item.data,
      }
      this.loading=true;
      agentAdminAPI.iris.update(option).then(res => {
        if(res.httpstatus==200){
          this.getIris()
          Message({
            message: "操作成功",
            type: 'success',
            duration: 5 * 1000
          })
        }
        else{
          Message({
            message: res["msg"],
            type: 'error',
            duration: 5 * 1000
          })
        }
        this.loading=false;
      });
    },
  },
  created() {
    
    this.initPageData()
  }
}
</script>
<style lang="scss" scoped>

  .uac-agentAdmin .label-right{
    float: right;
    padding: 8px 12px 8px 0;
    font-weight: 700;
  }
  .uac-agentAdmin .label-left{
    float: left;
    padding: 8px 12px 8px 0;
  }
  .uac-agentAdmin .not-null{
    float: right;
    padding: 4px 4px 4px 0;
    color:red;
    font-weight: 700;
  }
  .uac-agentAdmin .el-row{
    margin:0 0 10px 0;
  }

  .uac-agentAdmin .el-select{
    width: 100%;
  }
  .uac-agentAdmin .pull-right{
    float:right;
    margin-left: 10px;
  }
  .uac-agentAdmin .title-line{
    border-bottom:1px solid lightgray;
    padding-bottom:5px;
    margin-bottom:40px;
  }

  .uac-agentAdmin .area-block{
    padding:10px 10px 0 10px;
    border:1px solid lightgray;
    margin-bottom:20px;
  }
  .uac-agentAdmin .el-select-append{
        background-color: #f5f7fa;
        color: #909399;
        vertical-align: middle;
        display: table-cell;
        position: relative;
        border: 1px solid #DCDFE6;
        border-radius: 4px;
        width: 1px;
        white-space: nowrap;
        padding:2px 0;
        height:32px;
        text-align: center;
        width: 100%;

  }
</style>
