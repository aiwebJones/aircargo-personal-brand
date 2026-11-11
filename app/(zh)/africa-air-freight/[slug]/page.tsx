import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ArrowRight, CheckCircle2, ChevronDown, FileCheck2, Globe2, Plane, Truck } from 'lucide-react'
import EascargoLogo from '@/components/EascargoLogo'

const pages = {
  jnb: {
    code: 'JNB',
    city: '约翰内斯堡',
    country: '南非',
    title: '中国到JNB约翰内斯堡超大件空运',
    description:
      '中国各大空运口岸到JNB，适用于矿业、工程及紧急项目货。比较PVG、CAN、SZX、PEK、XMN、FOC、CTU、CKG和HAK等起运选项，并逐票核实全球中转、主甲板方案、SARS清关及南部非洲交付。',
    cargo: ['矿业备件', '工程设备', '汽车零部件', '高价值紧急项目货'],
    market:
      'O.R. Tambo国际机场是南非主要国际货运门户。南非机场公司称，该机场年货物处理能力为65万吨，并可直接连接全国公路网络。',
    customs:
      '订舱前核实南非进口商或注册代理、海关编码、HS Code、商业发票、装箱单、AWB资料及货物申报。受限制商品可能需要许可证、证书或主管机关授权函；旧货可能需要ITAC进口管制。',
    business:
      '经逐票核实清关和卡车安排后，可评估用于服务豪登省、南非及南部非洲部分项目的矿业急件、工业维修货、汽车零部件和高价值设备。',
    culture:
      '当地商务沟通常使用英语；出运前仍需由进口商、清关代理、航司操作方和最终收货现场确认单证、放货责任、卡车预约及卸货安排。',
  },
  fbm: {
    code: 'FBM',
    city: '卢本巴希',
    country: '刚果（金）',
    title: 'FBM卢本巴希矿业设备空运',
    description:
      '中国到FBM卢本巴希空运，面向铜带矿区设备、重型备件和项目货；可逐票评估欧洲或非洲枢纽中转及矿区交接条件。',
    cargo: ['铜带矿区备件', '变压器', '泵类', '电气柜', '重型维修设备'],
    market:
      '卢本巴希是刚果（金）铜带矿业供应链目的地。空运方案需区分FBM机场段、目的地清关代理工作、卢本巴希当地操作，以及最终矿区或工厂交接。',
    customs:
      '核实收货人资料、进口商身份、HS Code、法文或双语品名、商业发票、装箱单、AWB/LTA资料、目的地代理能力，以及GUICE、OCC/BIVAC或其他受管制货物手续是否适用。',
    business:
      '适合评估铜带矿区设备、工厂维修货、重型备件及紧急替换件，尤其是停工成本较高的场景。',
    culture:
      '法语沟通有帮助。许多货物与矿山、承包商及中资工业项目有关，因此单证一致性、卸货责任和现场进出条件，比单纯追求低机场到机场运价更重要。',
  },
  lun: {
    code: 'LUN',
    city: '卢萨卡',
    country: '赞比亚',
    title: 'LUN卢萨卡工业及矿业货物空运',
    description:
      '中国各大空运口岸到LUN，适用于赞比亚工业设备、矿业备件和紧急项目货。比较全国集货、LGG/BRU主甲板中转、LUN与NLA入境、ZRA/ASYCUDA资料及铜带矿区交付。',
    cargo: ['矿业备件', '化工泵', '发电机', '工厂设备', '工业维修零部件'],
    market:
      '卢萨卡是赞比亚工业和矿业供应链的重要入境点。项目货通常需要稳定的单证准备和明确的交付时间安排。',
    customs:
      '出运前对齐进口商及指定清关代理、HS Code、商业发票、装箱单、AWB资料、货值、许可证及ZCSA核查事项。赞比亚空运舱单资料可能需在到达前通过ZRA ASYCUDA ACI流程电子申报。',
    business:
      '适合评估赞比亚矿业支持货、工业备件、泵类、电机、化工厂设备及工厂紧急维修货。',
    culture:
      '商务中广泛使用英语。中资企业参与当地矿业和基础设施项目较多，中国起运项目货常见，但单证仍需谨慎核对。',
  },
  lbv: {
    code: 'LBV',
    city: '利伯维尔',
    country: '加蓬',
    title: 'LBV利伯维尔超长货空运：LGG/BRU与B747F方案',
    description:
      '中国到LBV超大件空运，可逐票评估LGG/BRU欧洲中转与B747F全货机方案，适用于长货、油气能源及工程项目货。',
    cargo: ['约8米长货', '油气及能源设备', '工程备件', '项目机械'],
    market:
      '利伯维尔可服务加蓬及中非项目。长货应先核实机型、主甲板和地面操作条件，再讨论运价。',
    customs:
      '应尽早确认法文单证沟通、收货人准备情况、货物描述、包装细节及目的地特殊操作要求。',
    business:
      '适合评估油气、能源、建筑和长尺寸工程货；B747F主甲板装载或欧洲中转可能提供可行路线，但需逐票确认。',
    culture:
      '当地商务沟通常用法语。特殊货物出中国前，需由当地代理确认地面操作和卡车进场条件。',
  },
  nbo: {
    code: 'NBO',
    city: '内罗毕',
    country: '肯尼亚',
    title: 'NBO内罗毕东非项目货空运',
    description:
      '中国到NBO空运，面向东非项目货、机械、通信设备、工业备件及超大件；可逐票评估欧洲、JKIA或区域枢纽路线。',
    cargo: ['通信设备', '工厂备件', '项目机械', '医疗及工业设备'],
    market:
      '内罗毕是东非重要货运枢纽之一，可服务肯尼亚项目及周边国家的后续分拨。JKIA现代化规划也说明，NBO应作为路线决策节点评估，而不只是一个机场代码。',
    customs:
      '核实进口商PIN、HS Code、发票货值、装箱单、受管制货物许可证，以及收货人是否可在乔莫·肯雅塔机场办理清关。',
    business:
      '适合评估东非区域分拨、基础设施项目、通信部署及有时限要求的工业维修货。',
    culture:
      '当地商务中常用英语，商业环境相对成熟。基础设施和设备贸易中可见中国供应商及承包商参与。',
  },
  ebb: {
    code: 'EBB',
    city: '恩德培',
    country: '乌干达',
    title: '中国到EBB恩德培乌干达项目货空运',
    description:
      '中国到EBB空运，适用于乌干达项目货、工业设备、工程机械零件和紧急备件，可逐票评估欧洲或东非中转。',
    cargo: ['工程设备零件', '能源项目货', '工业备件', '通信设备'],
    market:
      '恩德培是乌干达主要空运入境点。货物通常需要协调机场清关与坎帕拉或项目现场交付。',
    customs:
      '订舱前确认进口商税务资料、HS Code、发票、装箱单、许可证及最终交付责任。',
    business:
      '适合评估乌干达基础设施、能源、通信及工业维修货；此类货物有时更看重交付可预期性，而非普通空运速度。',
    culture:
      '当地广泛使用英语。中国承包商和供应商较活跃，但目的地清关能力仍需逐票核实。',
  },
  los: {
    code: 'LOS',
    city: '拉各斯',
    country: '尼日利亚',
    title: '中国到LOS拉各斯重货空运',
    description:
      '中国到LOS拉各斯重货空运，面向尼日利亚工业货、油气备件、工厂机械及需要提前规划清关的项目货。',
    cargo: ['油气备件', '工厂机械', '电气设备', '高价值紧急货'],
    market:
      '拉各斯是尼日利亚主要商业货运门户。路线需逐票确认，并管控清关资料、收货人准备情况及滞期风险。',
    customs:
      '出运前核实SONCAP或其他受管制货物要求、HS Code、适用时的Form M、发票货值、装箱单及进口商资料。',
    business:
      '适合评估尼日利亚工厂、油服、电力、通信及贸易货物；清关准备情况会影响实际到岸成本。',
    culture:
      '商务中使用英语。尼日利亚进口需求较强，但清关流程管理和可靠的当地代理至关重要。',
  },
  acc: {
    code: 'ACC',
    city: '阿克拉',
    country: '加纳',
    title: '中国到ACC阿克拉加纳项目货空运',
    description:
      '中国到ACC阿克拉空运，适用于加纳项目货、矿业备件、机械零件、医疗设备及工业货物，可评估欧洲中转。',
    cargo: ['矿业备件', '医疗设备', '工业设备', '建筑项目货'],
    market:
      '阿克拉服务于加纳商业和矿业供应链，可评估用于紧急备件和高价值设备。',
    customs:
      '确认进口商税务身份、HS Code、发票、装箱单、许可证，以及重货或易碎设备的目的地操作安排。',
    business:
      '适合评估加纳矿业、建筑、医疗和工厂维修货物；此类货物需要清晰单证和可预期的交付安排。',
    culture:
      '当地商务中常用英语。加纳商业环境较稳定，但客户确认出运前应说明清关费用项目。',
  },
  abj: {
    code: 'ABJ',
    city: '阿比让',
    country: '科特迪瓦',
    title: '中国到ABJ阿比让西非空运',
    description:
      '中国到ABJ阿比让空运，面向西非工业货、超大设备、工程零件及法语区非洲项目货。',
    cargo: ['工程机械零件', '工业设备', '能源项目货', '超大件备件'],
    market:
      '阿比让是西非重要门户，可服务科特迪瓦及周边法语区项目货。',
    customs:
      '准备适用于法语单证的货物描述、HS Code、发票、装箱单、进口商资料及重货特殊操作说明。',
    business:
      '适合评估西非法语区项目、工程设备、矿业支持货和工厂紧急备件。',
    culture:
      '法语很重要。中国供应商较活跃，但货物离境前需与当地收货人和清关代理对齐资料。',
  },
  bko: {
    code: 'BKO',
    city: '巴马科',
    country: '马里',
    title: '中国到BKO巴马科马里项目货空运',
    description:
      '中国到BKO巴马科空运，适用于马里矿业、建筑和工业项目货，可评估欧洲中转及非洲枢纽路线。',
    cargo: ['矿业设备零件', '建筑零件', '电力项目货', '工业紧急备件'],
    market:
      '巴马科服务于马里的矿业和建筑进口需求。大件货物应尽早核实路线可行性和地面操作条件。',
    customs:
      '订舱前确认法文单证、进口商准备情况、HS Code、发票、装箱单、许可证及目的地操作安排。',
    business:
      '适合评估延误成本较高、且空运可能帮助项目排期的矿业和建筑项目货。',
    culture:
      '法语沟通有帮助。由于路线选择可能有限，价格沟通前应提供货物尺寸和最晚到货日期。',
  },
  cky: {
    code: 'CKY',
    city: '科纳克里',
    country: '几内亚',
    title: '中国到CKY科纳克里矿业货空运',
    description:
      '中国到CKY科纳克里空运，面向几内亚矿业货、工业备件、项目设备和超大件，可评估欧洲中转。',
    cargo: ['矿业备件', '铝土矿项目设备', '发电机', '工业维修货'],
    market:
      '科纳克里与几内亚矿业和基础设施项目联系紧密。货运方案需考虑机场操作和后续交付条件。',
    customs:
      '确认收货人资料、法文货物描述、HS Code、发票、装箱单及是否需要特殊许可证。',
    business:
      '适合评估矿业项目支持、紧急设备替换，以及普通运输速度不足以满足需求的工业货。',
    culture:
      '单证中常用法语。许多货物涉及中资矿业供应链，双语协调有助于减少差错。',
  },
  oua: {
    code: 'OUA',
    city: '瓦加杜古',
    country: '布基纳法索',
    title: '中国到OUA瓦加杜古布基纳法索项目货空运',
    description:
      '中国到OUA空运，适用于布基纳法索矿业、基础设施、能源和紧急项目货，可评估经ADD、欧洲或西非枢纽中转。',
    cargo: ['矿业备件', '基础设施项目货', '电力设备', '工业紧急备件'],
    market:
      '瓦加杜古是西非内陆目的地。出运前规划路线需考虑可用运力、目的地操作和进口商准备情况。',
    customs:
      '订舱前准备法文货物描述、HS Code、发票、装箱单、进口商资料和许可证，并确认目的地代理安排。',
    business:
      '适合评估布基纳法索矿业、能源、基础设施及紧急备件；空运可能有助于项目排期。',
    culture:
      '实际单证沟通常用法语。由于路线选择可能有限，应尽早确认货物尺寸和最终交付期限。',
  },
  hre: {
    code: 'HRE',
    city: '哈拉雷',
    country: '津巴布韦',
    title: '中国到HRE哈拉雷津巴布韦空运',
    description:
      '中国到HRE空运，适用于津巴布韦矿业、农业、工厂设备、医疗和工业货，可评估非洲枢纽或欧洲中转。',
    cargo: ['农业机械零件', '矿业备件', '工厂设备', '医疗及通信设备'],
    market:
      '哈拉雷服务于津巴布韦工业、矿业和农业进口需求。到岸成本和收货人准备情况与空运段同样重要。',
    customs:
      '出运前确认进口商资料、HS Code、发票、装箱单、许可证、货值及目的地提货或交付责任。',
    business:
      '适合评估津巴布韦矿业、农业、工厂维修及紧急设备替换货。',
    culture:
      '贸易中常用英语。客户通常关注总到岸成本，因此订舱前应说明目的地费用和清关要求。',
  },
  nim: {
    code: 'NIM',
    city: '尼亚美',
    country: '尼日尔',
    title: '中国到NIM尼亚美尼日尔项目货空运',
    description:
      '中国到NIM空运，适用于尼日尔能源、建筑、人道援助、矿业和工业紧急货，可评估经ADD、欧洲或西非中转。',
    cargo: ['能源项目货', '工程设备零件', '人道援助物资', '工业紧急备件'],
    market:
      '尼亚美是萨赫勒内陆目的地。承诺交付前需核实路线选择、单证和当地代理响应情况。',
    customs:
      '出运前确认法文货物描述、HS Code、发票、装箱单、收货人资料、许可证及最终交接安排。',
    business:
      '适合评估能源、基础设施、矿业支持和紧急货物；此类货可能需要空运速度，但路线选择有限。',
    culture:
      '法语沟通有帮助。对于萨赫勒内陆货物，应在商谈运价前核实路线可行性和收货人准备情况。',
  },
  kgl: {
    code: 'KGL',
    city: '基加利',
    country: '卢旺达',
    title: '中国到KGL基加利卢旺达空运',
    description:
      '中国到KGL基加利空运，适用于卢旺达项目货、工业设备、医疗设备及东非内陆分拨。',
    cargo: ['医疗设备', '工业备件', '通信设备', '项目货'],
    market:
      '基加利是东非较有序的目的地，基础设施、医疗和科技货物需求持续发展。',
    customs:
      '核实进口商注册资料、HS Code、发票、装箱单、医疗或受管制货物许可证，以及当地配送预约。',
    business:
      '适合评估医疗、通信、工厂及政府相关项目货，尤其需要规范单证和明确到货时间的货物。',
    culture:
      '英语和法语都可能派上用场。当地市场重视流程清晰，因此应尽早提供路线方案和单证清单。',
  },
  dar: {
    code: 'DAR',
    city: '达累斯萨拉姆',
    country: '坦桑尼亚',
    title: '中国到DAR达累斯萨拉姆坦桑尼亚空运',
    description:
      '中国到DAR空运，适用于坦桑尼亚工业货、矿业零件、工程设备和东非项目货。',
    cargo: ['矿业备件', '工程设备零件', '能源设备', '工厂维修货'],
    market:
      '达累斯萨拉姆服务于坦桑尼亚及东非区域物流。海运速度无法满足需求时，可评估用于紧急货物。',
    customs:
      '确认进口商税务资料、HS Code、发票、装箱单、受管制货物许可证及最终交付责任。',
    business:
      '适合评估坦桑尼亚矿业、建筑、能源及工业货物，尤其需要可预期到货和当地交付协调的货物。',
    culture:
      '商务中使用英语。中国承包商参与当地基础设施项目较多，但内陆运输规划应与机场到机场运价区分。',
  },
  cpt: {
    code: 'CPT',
    city: '开普敦',
    country: '南非',
    title: '中国到CPT开普敦项目货空运',
    description:
      '中国到CPT开普敦空运，适用于南非工业货、海事设备、工程备件及紧急项目货。',
    cargo: ['海事设备', '工程备件', '工厂设备', '高价值紧急货'],
    market:
      '当约翰内斯堡不是最佳最终交付点时，开普敦可评估用于西开普项目、海事货物及区域商业货运。',
    customs:
      '核实进口商VAT资料、HS Code、商业发票、装箱单，以及当地交付是否需要特殊设备。',
    business:
      '适合评估服务开普敦或附近项目现场的海事、工程、食品加工及高价值设备货物。',
    culture:
      '当地商务沟通常使用英语。货物较重、易碎或需直接送至现场时，应重视末端交付规划。',
  },
  dur: {
    code: 'DUR',
    city: '德班',
    country: '南非',
    title: '中国到DUR德班南非货物空运',
    description:
      '中国到DUR德班空运，适用于南非工业货、港口相关设备、工厂备件及紧急项目货。',
    cargo: ['港口设备零件', '工厂备件', '工业机械', '紧急维修货'],
    market:
      '德班是南非港口、工业和沿海货运的重要节点。最终交付地位于夸祖鲁-纳塔尔省附近时，DUR可能比JNB更合适。',
    customs:
      '确认进口商资料、HS Code、发票、装箱单，以及需要机场提货还是卡车配送。',
    business:
      '适合评估德班周边的港口相关行业、工厂、海事服务公司及紧急设备货。',
    culture:
      '当地常用英语。客户应比较总到货时间和内陆成本，而不只看机场到机场运费。',
  },
  wdh: {
    code: 'WDH',
    city: '温得和克',
    country: '纳米比亚',
    title: '中国到WDH温得和克纳米比亚项目货空运',
    description:
      '中国到WDH空运，适用于纳米比亚矿业、能源、建筑和工业备件，可评估欧洲或南部非洲路线。',
    cargo: ['矿业备件', '能源设备', '建筑零件', '工业维修货'],
    market:
      '温得和克服务于纳米比亚矿业、能源和基础设施需求。大件货物订舱前需核实路线和操作条件。',
    customs:
      '确认进口商资料、HS Code、发票、装箱单、许可证，以及偏远项目现场的交付条款。',
    business:
      '适合评估纳米比亚矿业、可再生能源、建筑及紧急维修货物，尤其海运无法满足时限的场景。',
    culture:
      '商务中使用英语。项目现场可能较偏远，因此货物抵达机场只是交付方案的一部分。',
  },
  mpm: {
    code: 'MPM',
    city: '马普托',
    country: '莫桑比克',
    title: '中国到MPM马普托莫桑比克项目货空运',
    description:
      '中国到MPM空运，适用于莫桑比克能源、矿业、建筑和工业项目货，可评估欧洲中转。',
    cargo: ['能源项目零件', '矿业设备备件', '工程机械零件', '工业货物'],
    market:
      '马普托是莫桑比克工业和项目货的重要门户。大批量货物需确认目的地代理和内陆交付安排。',
    customs:
      '确认进口商资料、葡萄牙语或英语货物描述、HS Code、发票、装箱单及受管制货物要求。',
    business:
      '适合评估莫桑比克能源、建筑、矿业和工厂项目货，尤其交付期限紧迫的货物。',
    culture:
      '当地单证使用葡萄牙语会有帮助。中国项目货较常见，但出运前仍需协调收货人和清关代理。',
  },
  fih: {
    code: 'FIH',
    city: '金沙萨',
    country: '刚果（金）',
    title: '中国到FIH金沙萨刚果（金）项目货空运',
    description:
      '中国到FIH金沙萨空运，适用于刚果（金）项目货、通信设备、政府和工业货物，可评估欧洲或非洲枢纽中转。',
    cargo: ['通信设备', '工业设备', '政府项目货', '紧急备件'],
    market:
      '金沙萨是刚果（金）首都的主要门户，与FBM不同，常服务行政、通信及刚果（金）西部需求。',
    customs:
      '确认收货人资料、法文货物描述、HS Code、发票、装箱单，以及货物是否需要特殊许可证或项目审批。',
    business:
      '适合评估通信、基础设施、工业及首都地区货物，尤其需要双语协调和规范单证的项目。',
    culture:
      '法语很重要。刚果（金）货物不应只按运价销售；收货人准备情况和当地操作能力会影响实际交付。',
  },
  add: {
    code: 'ADD',
    city: '亚的斯亚贝巴',
    country: '埃塞俄比亚',
    title: '中国到ADD亚的斯亚贝巴埃塞俄比亚空运',
    description:
      '中国到ADD空运，适用于埃塞俄比亚工业货、机械零件、医疗设备及东非项目货。',
    cargo: ['工业设备', '医疗设备', '工厂备件', '项目货'],
    market:
      '亚的斯亚贝巴是东非重要航空枢纽，可用于评估埃塞俄比亚货物或区域空运方案。',
    customs:
      '确认进口商许可证、HS Code、发票、装箱单、受管制货物所需许可证及最终交付条款。',
    business:
      '适合评估工业、医疗、制造和基础设施货物，尤其需要空运速度和清晰单证规划的货物。',
    culture:
      '国际贸易中常使用英语。进口管制对单证较敏感，因此应先核实许可证和收货人准备情况。',
  },
  dss: {
    code: 'DSS',
    city: '达喀尔',
    country: '塞内加尔',
    title: '中国到DSS达喀尔塞内加尔空运',
    description:
      '中国到DSS达喀尔空运，适用于塞内加尔工业货、工程设备零件、医疗设备及西非项目货。',
    cargo: ['建筑零件', '医疗设备', '工业备件', '项目机械'],
    market:
      '达喀尔是西非法语区的重要门户。提前安排单证和路线后，可评估用于塞内加尔及区域项目。',
    customs:
      '准备法文货物描述、进口商资料、HS Code、发票、装箱单及受管制货物所需许可证。',
    business:
      '适合评估塞内加尔基础设施、医疗、工厂及贸易货物，尤其需要可靠空运和法语协调的项目。',
    culture:
      '法语是主要商务语言。当地代理质量和单证清晰度有助于避免清关延误。',
  },
  cmn: {
    code: 'CMN',
    city: '卡萨布兰卡',
    country: '摩洛哥',
    title: '中国到CMN卡萨布兰卡摩洛哥空运',
    description:
      '中国到CMN卡萨布兰卡空运，适用于摩洛哥工业货、汽车零部件、机械和北非项目货。',
    cargo: ['汽车零部件', '工厂设备', '工业备件', '高价值货物'],
    market:
      '卡萨布兰卡是北非重要商业门户，拥有制造业、汽车和工业进口需求。',
    customs:
      '确认进口商资料、HS Code、发票、装箱单、受管制货物许可证，以及是否需要法语或阿拉伯语单证支持。',
    business:
      '适合评估摩洛哥汽车、制造、工业及有时限要求的贸易货物。',
    culture:
      '商务中法语较常用。摩洛哥物流环境相对成熟，但特殊货物仍需核实操作条件。',
  },
  cai: {
    code: 'CAI',
    city: '开罗',
    country: '埃及',
    title: '中国到CAI开罗埃及项目货空运',
    description:
      '中国到CAI开罗空运，适用于埃及工业货、能源项目、机械零件及紧急设备货运。',
    cargo: ['能源设备', '工业机械', '工厂备件', '项目货'],
    market:
      '开罗是连接北非和中东的重要货运门户，可评估用于紧急工业货和项目货。',
    customs:
      '出运前核实进口商资料、HS Code、发票、装箱单、许可证、货物描述及所需的受管制进口审批。',
    business:
      '适合评估埃及能源、制造、基础设施及工业紧急维修货。',
    culture:
      '当地语言为阿拉伯语，国际贸易中常用英语。海关审核可能较严格，因此单证必须保持一致。',
  },
}

type Slug = keyof typeof pages

type CoreRouteBrief = {
  fields: string[]
  links: Array<{ href: string; label: string }>
  caseNote?: string
}

const coreRouteBriefs: Partial<Record<Slug, CoreRouteBrief>> = {
  jnb: {
    fields: [
      '实际货物所在地、起运城市及货好日期',
      '件数、每件包装尺寸与毛重',
      '进口商或清关代理、HS Code资料',
      'JNB机场提货或最终城市/现场及交接范围',
    ],
    links: [
      { href: '/tools/air-freight-chargeable-weight-calculator/', label: '核对计费重量' },
      { href: '/tools/africa-air-freight-customs-document-checklist/', label: '查看非洲空运单证清单' },
    ],
  },
  fbm: {
    fields: [
      '最终城市、矿区/工厂地址与交付期限',
      '每件尺寸、毛重、吊点及包装照片情况',
      '进口商、清关代理、HS Code与法文品名',
      'FBM卸货工具、卡车通道与报价责任终点',
    ],
    links: [
      { href: '/tools/africa-air-freight-customs-document-checklist/', label: '查看非洲空运单证清单' },
      { href: '/tools/africa-urgent-spare-parts-route-risk-checklist/', label: '核对紧急备件路线风险' },
    ],
  },
  lun: {
    fields: [
      '最终城市、矿区/工厂或项目现场',
      '是否已有偏好LUN或NLA，或需协助比较',
      '件数、单件尺寸重量及货好日期',
      '进口商/清关代理、单证状态与交付范围',
    ],
    links: [
      { href: '/insights/ndola-nla-zra-asycuda-aci-copperbelt-mining-air-freight-clearance/', label: '比较NLA与铜带交付资料' },
      { href: '/tools/air-freight-chargeable-weight-calculator/', label: '核对计费重量' },
    ],
  },
  lbv: {
    fields: [
      '每件包装长宽高与毛重',
      '装载方向、吊点、已知重心及箱体情况',
      '收货人/代理准备状态与可用卸货条件',
      'LBV机场提货或加蓬最终城市/现场交付',
    ],
    links: [
      { href: '/cases/#lbv-8m-via-europe', label: '查看LBV约8米路线评估记录' },
      { href: '/tools/air-freight-chargeable-weight-calculator/', label: '核对计费重量' },
    ],
    caseNote: '匿名路线评估：约8米单件，经LGG/BRU衔接至LBV。需逐段确认装载、中转接收和目的地卸货；不代表当前舱位、运价或交付承诺。',
  },
  abj: {
    fields: [
      'ABJ机场、阿比让交付或其他最终城市/现场',
      '进口商、清关代理及GUCE / FDI状态',
      '法文品名、HS Code、发票与装箱单资料',
      '件数、单件尺寸重量及卸货条件',
    ],
    links: [
      { href: '/insights/cote-divoire-abj-guce-fdi-sydam-air-freight-clearance/', label: '核对ABJ单证状态' },
      { href: '/tools/africa-air-freight-customs-document-checklist/', label: '查看非洲空运单证清单' },
    ],
  },
}

function RouteSupplement({ enabled, children }: { enabled: boolean; children: ReactNode }) {
  if (!enabled) return <>{children}</>

  return (
    <details id="route-supplement" data-testid="route-supplement" className="border-y border-slate-200 bg-slate-50">
      <summary data-testid="route-supplement-toggle" className="mx-auto flex max-w-6xl cursor-pointer list-none items-center justify-between gap-4 px-6 py-6 font-semibold text-slate-900 marker:hidden">
        <span>展开路线背景、操作细节与常见问题</span>
        <ChevronDown className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
      </summary>
      <div>{children}</div>
    </details>
  )
}
type DeepDive = {
  heading: string
  intro: string
  scenarios: string[]
  risks: string[]
  salesAngle: string
}

const chineseDestinations: Record<Slug, { city: string; country: string; keywords: string[] }> = {
  jnb: { city: '约翰内斯堡', country: '南非', keywords: ['JNB约翰内斯堡空运', '南非矿业设备空运', '南部非洲项目货'] },
  fbm: { city: '卢本巴希', country: '刚果金', keywords: ['FBM卢本巴希空运', '刚果金矿业设备空运', '铜钴矿区备件空运'] },
  lun: { city: '卢萨卡', country: '赞比亚', keywords: ['LUN卢萨卡空运', '赞比亚矿业备件空运', '中国到赞比亚空运'] },
  lbv: { city: '利伯维尔', country: '加蓬', keywords: ['LBV利伯维尔空运', '加蓬超长货空运', 'B747F开鼻门装载'] },
  nbo: { city: '内罗毕', country: '肯尼亚', keywords: ['NBO内罗毕空运', '肯尼亚项目货空运', '东非空运Hub'] },
  ebb: { city: '恩德培', country: '乌干达', keywords: ['EBB恩德培空运', '乌干达项目货空运', '中国到乌干达空运'] },
  los: { city: '拉各斯', country: '尼日利亚', keywords: ['LOS拉各斯空运', '尼日利亚空运清关', '中国到尼日利亚空运'] },
  acc: { city: '阿克拉', country: '加纳', keywords: ['ACC阿克拉空运', '加纳项目货空运', '中国到加纳空运'] },
  abj: { city: '阿比让', country: '科特迪瓦', keywords: ['ABJ阿比让空运', '科特迪瓦空运', '西非法语区空运'] },
  bko: { city: '巴马科', country: '马里', keywords: ['BKO巴马科空运', '马里项目货空运', '西非内陆空运'] },
  cky: { city: '科纳克里', country: '几内亚', keywords: ['CKY科纳克里空运', '几内亚矿业设备空运', '铝土矿项目货空运'] },
  oua: { city: '瓦加杜古', country: '布基纳法索', keywords: ['OUA瓦加杜古空运', '布基纳法索空运', '萨赫勒项目货空运'] },
  hre: { city: '哈拉雷', country: '津巴布韦', keywords: ['HRE哈拉雷空运', '津巴布韦空运', '南部非洲工业设备空运'] },
  nim: { city: '尼亚美', country: '尼日尔', keywords: ['NIM尼亚美空运', '尼日尔空运', '萨赫勒紧急空运'] },
  kgl: { city: '基加利', country: '卢旺达', keywords: ['KGL基加利空运', '卢旺达空运', '东非内陆空运'] },
  dar: { city: '达累斯萨拉姆', country: '坦桑尼亚', keywords: ['DAR达累斯萨拉姆空运', '坦桑尼亚项目货空运', '东非工程设备空运'] },
  cpt: { city: '开普敦', country: '南非', keywords: ['CPT开普敦空运', '南非开普敦空运', '海工设备空运'] },
  dur: { city: '德班', country: '南非', keywords: ['DUR德班空运', '南非德班空运', '港口设备空运'] },
  wdh: { city: '温得和克', country: '纳米比亚', keywords: ['WDH温得和克空运', '纳米比亚矿业设备空运', '中国到纳米比亚空运'] },
  mpm: { city: '马普托', country: '莫桑比克', keywords: ['MPM马普托空运', '莫桑比克项目货空运', '能源设备空运'] },
  fih: { city: '金沙萨', country: '刚果金', keywords: ['FIH金沙萨空运', '刚果金空运', '中非项目货空运'] },
  add: { city: '亚的斯亚贝巴', country: '埃塞俄比亚', keywords: ['ADD亚的斯亚贝巴空运', '埃塞俄比亚空运', 'ET空运中转'] },
  dss: { city: '达喀尔', country: '塞内加尔', keywords: ['DSS达喀尔空运', '塞内加尔空运', '西非法语区项目货'] },
  cmn: { city: '卡萨布兰卡', country: '摩洛哥', keywords: ['CMN卡萨布兰卡空运', '摩洛哥空运', '北非空运'] },
  cai: { city: '开罗', country: '埃及', keywords: ['CAI开罗空运', '埃及项目货空运', '北非工程设备空运'] },
}

const quoteFields = [
  '货物品名及清晰描述',
  'HS Code及申报货值',
  '每件包装的长、宽、高',
  '毛重及计费重量核对',
  '包装照片、箱体材料及叉车作业条件',
  '吊点、重心及装载方向',
  '中国起运城市及备货日期',
  '最终城市、现场地址或机场提货方案',
  '最晚到货日期及紧急原因',
]

const routeSteps = [
  {
    title: '1. 中国起运可行性',
    body: '报价前核实货物能否通过客机宽体腹舱、定期全货机、B747F主甲板、卡车接驳欧洲或其他可行出口路线离开中国。',
  },
  {
    title: '2. LGG/BRU欧洲中转选项',
    body: '中国直飞无法接收货物尺寸或重量时，可评估以LGG/BRU作为欧洲货运枢纽，安排重新组板、交接、包机衔接或非洲二程。',
  },
  {
    title: '3. 非洲到港与内陆交付',
    body: '到达机场并不代表交付完成。实际方案还需明确清关代理准备情况、地面操作、卸货工具、卡车进场条件和最终交付范围。',
  },
]

const urgentSparePartChecks = [
  '停工期限及现场最晚可接受到货时间',
  '最长件、最重件及主甲板装载需求',
  '进口商资料、受管制货物许可证及清关代理准备情况',
  '机场提货、内陆卡车、卸货工具及最终现场交接',
]

const fbmHandoverChecks = [
  '报价止于FBM机场，还是继续送至铜带矿区、工厂、仓库或承包商场地？',
  '起飞前是否备齐进口商NIF、清关代理、HS Code、法文品名、发票、装箱单及AWB/LTA资料？',
  '最重件能否在卢本巴希卸货，并使用所需叉车、吊车、卡车通道和预约安排送至现场？',
  '交付期限是否与工厂停工、计划维修、承包商进场或普通补货有关？',
]

const fbmQuoteFields = [
  'FBM以外的最终矿区、工厂、仓库或城市',
  '进口商、收货人及指定清关代理',
  'HS Code及法文或双语货物描述',
  '单件尺寸、毛重、吊点及包装照片',
  '卸货工具、现场通道、卡车限制及交付预约',
  '现场最晚可接受到货日期及停工原因',
]

const lunQuoteFields = [
  '赞比亚最终城市、矿区、工厂或项目现场地址',
  'LUN、NLA，或请协助选择机场',
  '进口商、收货人及指定清关代理',
  '件数、每件尺寸、毛重及包装照片',
  '备货日期及现场最晚可接受到货时间',
  '机场提货、清关支持或现场交付范围',
  '卡车进场、卸货设备及交付预约',
  'HS Code、发票、装箱单、AWB资料及许可证核查',
]

const jnbCapacityChecks = [
  '货物能否经HAK/JNB运输，还是仍需评估LGG/BRU主甲板方案？',
  'JNB是否为实际交接点，还是仅为空运首站，后续还需送往矿区、工厂或跨境卡车段？',
  '订舱前，SARS、NRCS、ITAC或进口商资料是否与货物描述一致？',
]

const jnbFocDecisionRows = [
  {
    label: 'FOC本地起运',
    detail: '根据实际最长件和最重件，核实福州当前机型、货站收货条件及中转方案。',
  },
  {
    label: 'XMN备选口岸',
    detail: '若厦门当前的起运、中转操作或截货时间更适合福建工厂货，可将XMN纳入比较。',
  },
  {
    label: '全国枢纽集运',
    detail: '比较国内卡车送往PVG、CAN、SZX、HKG或其他已确认枢纽的总成本、装载可行性和所需到货日期。',
  },
  {
    label: '超大件路线',
    detail: '普通航线拒收该件时，应先核实当前主甲板选项、HAK/JNB运力或LGG/BRU中转，再判断路线是否可行。',
  },
]

const southAfricaCoastalChecks = [
  '与经JNB交接后再内陆卡车运输相比，CPT或DUR是否更接近最终现场？',
  '起飞前，商业发票、HS Code、原产地、进口商资料及受管制货物文件是否一致？',
  '货物是否需要海事、港口、工厂或冷链操作，而非普通机场提货？',
]

const nigeriaOilGasChecks = [
  '清关机场应选LOS，还是因哈科特港、Onne、Bonny、Warri或油服交付而需要评估PHC？',
  'Form M、PAAR、SONCAP或国家单一窗口的责任方，是否与AWB、发票和产品证书资料相匹配？',
  '报价范围是机场到机场、协助清关、机场提货，还是停机检修备件的现场交付？',
]

const nboGatewayChecks = [
  '可否将CAN-NBO作为B767-300F运力线索核实，还是仍需评估ADD、LGG/BRU、JNB或其他备选路线？',
  'NBO是最终机场、肯尼亚清关点，还是前往乌干达、坦桑尼亚、南苏丹、卢旺达或内陆项目现场前的首个枢纽？',
  '起飞前，PVoC/CoC、IDF、进口商KRA PIN、HS Code、发票货值和受管制货物许可证是否一致？',
  '货物是否需要JKIA机场提货、保税运输、跨境卡车、冷链操作或最终现场卸货支持？',
]

const inlandAfricaCustomsReadiness: Partial<
  Record<
    Slug,
    {
      eyebrow: string
      heading: string
      body: string
      primaryHref: string
      primaryLabel: string
      secondaryHref: string
      secondaryLabel: string
      checks: string[]
    }
  >
> = {
  abj: {
    eyebrow: 'ABJ清关准备',
    heading: 'ABJ路线规划与GUCE、FDI及SYDAM资料核查',
    body:
      'ABJ可服务科特迪瓦工业、建筑、医疗及西非法语区项目货，但机场运价只是可执行报价的一部分。起飞前确认进口商GUCE流程、FDI状态、SYDAM/e-DAU申报资料、适用于法文单证的货物描述及最终交付范围。',
    primaryHref: '/insights/cote-divoire-abj-guce-fdi-sydam-air-freight-clearance/',
    primaryLabel: '核对ABJ的GUCE、FDI和SYDAM资料',
    secondaryHref: '/insights/ghana-acc-ivory-coast-abj-west-africa-air-freight/',
    secondaryLabel: '比较ACC与ABJ西非门户',
    checks: [
      '进口商、清关代理、GUCE账号、FDI状态、AWB、发票、装箱单、HS Code和货值是否一致？',
      '产品是否需要电子符合性证书、电子植物检疫证书、原产地证、电子许可证或其他受管制货物文件？',
      '报价范围是ABJ机场提货、阿比让交付，还是继续送往西非法语区项目现场？',
    ],
  },
  kgl: {
    eyebrow: 'KGL清关准备',
    heading: 'KGL路线规划与RRA、RICA及RSB资料核查',
    body:
      'KGL可评估用于卢旺达项目货、医疗、电子产品及东非内陆分拨，但只有进口文件准备就绪，路线报价才有参考意义。紧急货订舱前核实RRA电子单一窗口流程、RICA进口检验、RSB符合性要求及最终交付范围。',
    primaryHref: '/insights/rwanda-kgl-rra-rsb-air-freight-clearance-documents/',
    primaryLabel: '核对KGL的RRA与RSB资料',
    secondaryHref: '/insights/east-africa-nbo-ebb-dar-project-cargo/',
    secondaryLabel: '比较东非项目货路线',
    checks: [
      '用于RRA/eSW申报的进口商TIN、清关代理、发票、装箱单、AWB资料、HS Code和货值是否一致？',
      '产品是否触发RICA进口检验、RSB认证、许可证、标签、测试报告或符合性核查？',
      '报价范围是KGL机场提货、卢旺达境内交付，还是继续送往东非内陆项目现场？',
    ],
  },
  hre: {
    eyebrow: 'HRE清关准备',
    heading: 'HRE矿业和工业货先核对ZIMRA/CBCA，再看机场价格',
    body:
      'HRE可评估用于津巴布韦矿业、农业、医疗和工厂备件，但单证缺失可能抵消空运速度优势。确认ZIMRA商业进口资料、ASYCUDA/进口报关单责任、CBCA/PVoC适用范围及最终交接条款后，再安排中国起运订舱。',
    primaryHref: '/insights/zimbabwe-hre-zimra-asycuda-cbca-air-freight-clearance/',
    primaryLabel: '核对HRE的ZIMRA与CBCA资料',
    secondaryHref: '/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/',
    secondaryLabel: '比较HRE货物的ET/ADD选项',
    checks: [
      '用于ASYCUDA申报的进口商商业伙伴编号、清关代理、发票、装箱单、AWB、运费和保险资料是否已准备？',
      '货物出运前是否需要CBCA/PVoC、符合性证书、进口许可证或受限制货物审批？',
      'HRE是最终机场、内陆清关点，还是送往矿区、农场、工厂或项目现场前的一段路线？',
    ],
  },
}

const addRouteProgramDestinationSlugs: Slug[] = ['cmn', 'add', 'cky', 'oua', 'bko', 'ebb']

const addRouteProgramChecks = [
  '货物是否已在MLE、SIN或MNL，还是将中国起运货物改道会增加更多成本和延误？',
  'ADD中转能否接收该目的地货物的实际尺寸、重量、货物属性，并衔接后续航班窗口？',
  '追求更低机场运价前，是否已确认目的地文件、收货人准备情况和最终交付范围？',
]

const chinaOriginClusters = [
  {
    region: '华东出口口岸',
    airports: 'PVG / HGH / NKG',
    coverage: '上海、江苏、浙江、安徽及周边制造业货源',
    decision: '优先比较宽体腹舱、全货机衔接、欧洲或全球枢纽中转，以及超限件国内集卡成本。',
  },
  {
    region: '华南及香港口岸',
    airports: 'CAN / SZX / HKG / HAK',
    coverage: '广东、广西、海南和珠三角工厂货源',
    decision: '比较广州、深圳、香港国际网络与海南可用资源，逐票核实主甲板、跨境交接和目的港接受条件。',
  },
  {
    region: '华北及东北口岸',
    airports: 'PEK / PKX / TSN / TAO / DLC / SHE',
    coverage: '北京、天津、山东、河北及东北工业货源',
    decision: '根据货物位置、国内运输、航司收货限制和中转窗口选择北京、天津、青岛或东北集货方案。',
  },
  {
    region: '华中及西部口岸',
    airports: 'WUH / CGO / XIY / CTU / TFU / CKG',
    coverage: '湖北、河南、陕西、四川、重庆及西部项目货源',
    decision: '比较本地起运与卡车转PVG/CAN/SZX等枢纽的总成本、装载可行性和最晚到货时间。',
  },
  {
    region: '福建及东南沿海口岸',
    airports: 'XMN / FOC',
    coverage: '厦门、福州、泉州及福建周边工厂货源',
    decision: 'FOC和XMN都是全国网络中的起运选项；本地舱位不适合时，再比较华东或华南枢纽集运。',
  },
]

type OriginStrategy = {
  heading: string
  intro: string
  routeOptions: Array<{ title: string; body: string }>
}

const originStrategies: Partial<Record<Slug, OriginStrategy>> = {
  jnb: {
    heading: '全国主要航空口岸到 JNB：先选起运区域，再比较逐票路线。',
    intro:
      'EASCargo不把JNB限定为某一个中国起运机场。根据货物所在地、单件尺寸重量和时效，比较全国主要口岸，再判断全球中转网络、HAK全货机容量信号和LGG/BRU主甲板方案。',
    routeOptions: [
      {
        title: '中国起运口岸与国内集运',
        body: '比较最近主要机场起运与国内卡车送往更强枢纽。起运地应根据路线总成本、最长件、最重件、备货日期及已确认的中转接受情况决定，不能只看机场代码。',
      },
      {
        title: '全球枢纽中转',
        body: '可将ADD、DXB/DWC和IST作为JNB路线候选枢纽，其他枢纽需按具体货物评估。公开航线信息不等于货物获接收；每票仍需核实当前运力、机型、联运和中转条件。',
      },
      {
        title: 'HAK-JNB全货机运力信号',
        body: 'Astral Aviation曾公开发布海口至约翰内斯堡Boeing 767-300全货机启航信息。HAK应作为逐票核实的运力选项，不应视为固定班期或保证配载。',
      },
      {
        title: 'LGG / BRU主甲板备选',
        body: '单件无法装入客机腹舱或衔接全货机时，可比较欧洲中转和主甲板装载。报价前确认舱门尺寸、机舱轮廓、地板载荷、组板、中转操作及JNB卸货条件。',
      },
    ],
  },
  fbm: {
    heading: '全国主要航空口岸到 FBM：路线必须落到铜钴矿区交付。',
    intro:
      'FBM不是只替换机场代码的普通非洲报价。全国集货后，需在同一票方案中考虑可装载机型、欧洲或非洲枢纽衔接、刚果（金）进口资料、卢本巴希卸货及最终矿区交付。',
    routeOptions: [
      {
        title: '就近口岸与全货机枢纽比较',
        body: '比较本地起运与卡车送往PVG、CAN、SZX、HKG或其他出口枢纽。泵、变压器和电气柜需按单件尺寸、地板载荷、吊点和中转接受条件核实。',
      },
      {
        title: 'LGG / BRU欧洲中转与非洲二程',
        body: '普通腹舱航线拒收的货物，可评估通过欧洲中转获得主甲板选项。预订欧洲段前，需确认飞往FBM的第二程、转运仓库、组板和目的地卸货安排。',
      },
      {
        title: '非洲枢纽比较',
        body: '当前联运或卡车方案适用时，可评估ADD、NBO、JNB或其他非洲枢纽。确认过境清关、单件接收和交接责任前，不应假定枢纽衔接可行。',
      },
      {
        title: 'FBM清关与矿区交付',
        body: '报价范围必须说明止于FBM机场、是否包含清关协调，或是否继续送往铜带矿区/工厂。法文货物描述、收货人资料、卸货工具及末端卡车通行条件都会影响具体货物安排。',
      },
    ],
  },
  lun: {
    heading: '全国主要航空口岸到 LUN：不能把Lusaka机场价当作最终交付价。',
    intro:
      'LUN可评估用于赞比亚工业、能源、矿业和工厂急件。全国起运后仍需区分仅交至卢萨卡、继续送往铜带矿区，还是交付恩多拉、基特韦或具体项目现场。',
    routeOptions: [
      {
        title: '中国起运口岸与全球枢纽筛选',
        body: '比较最近的中国起运机场与更强的出口枢纽及当前中转连接。选择起运机场前，需按最长件和最重件核实客机腹舱、全货机及联运接收条件。',
      },
      {
        title: '超限件欧洲主甲板方案',
        body: '常规连接无法接收货物高度、长度或重量时，可比较LGG/BRU方案。承诺路线前，需确认非洲第二程、中转组板及LUN地面操作。',
      },
      {
        title: 'LUN到港与区域延伸',
        body: '止于LUN的路线与继续送往恩多拉、基特韦、矿区或工业现场的方案不同。比较机场清关、境内卡车运输及其他区域入口时，应核对完整交付责任。',
      },
      {
        title: '赞比亚文件与现场交付准备',
        body: '出运前应对齐进口商资料、HS Code、发票、装箱单、许可证、包装照片、卡车通道和卸货设备。航班快并不能解决收货人或项目现场尚未准备好的问题。',
      },
    ],
  },
  lbv: {
    heading: '全国主要航空口岸到 LBV：长货先判断能不能装，再讨论价格。',
    intro:
      'LBV的核心不是从哪个中国机场报出最低公斤价，而是长货、油气设备和工程件能否完成国内集运、主甲板装载、欧洲或非洲中转、Libreville卸货和项目现场交接。',
    routeOptions: [
      {
        title: '长货适配的中国起运口岸',
        body: '根据机舱门尺寸、机舱轮廓、地板载荷和仓库操作比较全国集货及出口口岸。即使普通货物有舱位，最近的机场也可能无法接收6至8米长件。',
      },
      {
        title: 'LGG / BRU与B747F可行性',
        body: '欧洲中转及B747F主甲板或机鼻舱门方案可能适用于长货，但须先核实装载方向、重心、箱体强度、中转组板和第二程接收条件。',
      },
      {
        title: '非洲衔接与LBV操作',
        body: '任何非洲枢纽或直达第二程都需按实际单件核实。货物离开中国前确认LBV卸货设备、叉车或吊车通道、仓储限制及卡车提货安排。',
      },
      {
        title: '加蓬文件与项目现场交付',
        body: '需明确适用于法文单证的货物描述、收货人准备情况、清关代理责任，以及油气、能源或建筑项目现场通行条件。货物抵达机场只是项目计划中的一个节点。',
      },
    ],
  },
}

const jnbOfficialFacts = [
  {
    label: 'O.R. Tambo机场与货运能力',
    detail: 'ACSA将JNB列为其旗舰机场，称其连接南非全国公路网络，年货物处理能力为65万吨。',
    href: 'https://www.airports.co.za/airports/or-tambo-international-airport/the-airport/about-or-tambo',
  },
  {
    label: '南非进口商与货物申报',
    detail: 'SARS要求进口商或其代理申报进口货物；境外进口商须指定南非注册代理。',
    href: 'https://www.sars.gov.za/customs-and-excise/registration-licensing-and-accreditation/importers/',
  },
  {
    label: '受限制及受管制货物',
    detail: 'SARS说明，受限制货物只有在满足规定条件后方可入境，例如取得许可证、证书或主管机关授权函。',
    href: 'https://www.sars.gov.za/customs-and-excise/prohibited-restricted-and-counterfeit-goods/',
  },
  {
    label: '旧货及二手货进口管制',
    detail: '南非政府指引称，旧货、二手货、废料和废品受进口管制，出运前应向ITAC核实。',
    href: 'https://www.gov.za/services/import/import-permit-general-goods',
  },
  {
    label: 'JNB公路接驳范围',
    detail: '承运人公布的公路网络显示，JNB可连接南非城市及南部非洲部分地点；可用性和货物接收情况仍须逐票重新确认。',
    href: 'https://www.turkishcargo.com/documents/karayolu_tasimaciligi/EN/africa_truck_service2.pdf',
  },
]

const fbmOfficialFacts = [
  {
    label: 'FBM地面操作服务',
    detail:
      'Menzies Aviation将卢本巴希FBM列入其网络并列出机场地面服务。这说明FBM是实际运营点，但不能据此推定任何超大件、日期或货类都能接收；仍需按货物逐票确认。',
    href: 'https://menziesaviation.com/our-network/lubumbashi-fbm/',
  },
  {
    label: '刚果（金）进口报关',
    detail:
      'DGDA进口程序指引说明海关申报、DAU电子申报及承运人货物舱单责任。空运的AWB/LTA和舱单资料应与发票、装箱单及货物描述一致。',
    href: 'https://douane.gouv.cd/les-procedures-douanieres/les-procedures-de-dedouanement-a-limportation-en-rdc%EF%BF%BC/',
  },
  {
    label: 'GUICE单一窗口流程',
    detail:
      'SEGUCE运营刚果（金）外贸手续的GUICE平台。货物离开中国前，应核实FBM货物的预清关要求及进口商、代理准备情况。',
    href: 'https://segucerdc.com/fr/home',
  },
  {
    label: '刚果（金）进口单证清单',
    detail:
      'Trade.gov列出的刚果（金）进口文件包括：适用时的BIVAC或OCC核验、进口许可证、商业发票、装箱单、提单或空运单、保险凭证及原产地证。',
    href: 'https://www.trade.gov/country-commercial-guides/democratic-republic-congo-import-requirements-and-documentation',
  },
]

const lunOfficialFacts = [
  {
    label: 'LUN与NLA是赞比亚不同的入境门户',
    detail: '赞比亚机场公司将卢萨卡的肯尼思·卡翁达国际机场和恩多拉的西蒙·姆万萨·卡普韦普韦国际机场列为其管理的国际机场。选择赞比亚入境点前，应核对最终现场位置。',
    href: 'https://www.zacl.co.zm/corporate',
  },
  {
    label: '赞比亚进口文件与ASYCUDA',
    detail: 'Trade.gov将空运单和商业发票列为清关文件，并说明ZRA使用ASYCUDA；资料还提及进口申报表及特定产品的提前认证要求。',
    href: 'https://www.trade.gov/country-commercial-guides/zambia-import-requirements-documentation',
  },
  {
    label: '空运货物预先信息',
    detail: 'ASYCUDA称，赞比亚在国际机场启用ACI模块，航空公司和货运代理可依据ASYCUDAWorld及IATA Cargo XML标准，在货物到达前提交电子舱单。',
    href: 'https://asycuda.org/en/zambia-pilots-advanced-cargo-information-module-at-international-airports/',
  },
  {
    label: 'ZRA空运申报责任',
    detail: 'ZRA指引称，空运货物需在到达前电子申报，并区分承运人舱单/AWB申报与货代分运单申报责任。货物起飞前应对齐资料，而不是到达后再修改。',
    href: 'https://www.zra.org.zm/wp-content/uploads/2024/02/ASYCUDA_IATA_Cargo_XML_Filing_Guidance_Version_Zambia.pdf',
  },
  {
    label: '指定赞比亚清关代理',
    detail: 'ZRA称，进出口商通过与ASYCUDAWorld关联的模块指定持牌清关代理。货物离开中国前应确认受委托的代理及进口商身份。',
    href: 'https://www.zra.org.zm/appointment-of-clearing-agents-2/',
  },
]

const nboOfficialFacts = [
  {
    label: 'JKIA现代化与货运枢纽规划',
    detail: 'STAT Times报道，肯尼亚任命Dar Al-Handasah担任JKIA现代化项目工程顾问；项目金额为1,542亿肯尼亚先令，规划目标是到2045年将货运量从约39万吨提高至86万吨。',
    href: 'https://www.stattimes.com/cargo-airports/kenya-signs-engineer-consultant-deal-for-jkia-modernisation-1359919',
  },
  {
    label: 'JKIA总体规划与货运配套',
    detail: 'Dar介绍的JKIA规划工作涵盖空侧、航站楼、陆侧、交通和城市发展，并包括地面操作、维修、货运及公用设施配套。',
    href: 'https://www.dar.com/work/project/jomo-kenyatta-international-airport-%28jkia%29-and-wilson-airport-%28wap%29-',
  },
  {
    label: '肯尼亚PVoC/CoC符合性核验',
    detail: 'KEBS说明，PVoC用于在货物发运前核验出口至肯尼亚的受管制商品是否符合要求，因此NBO订舱前应核实产品范围和证书责任方。',
    href: 'https://www.kebs.org/pre-export-verification-of-conformity/',
  },
  {
    label: '肯尼亚进口申报表',
    detail: 'InfoTradeKenya将IDF列为进口流程和文件要求之一。货物离开中国前应核对进口商资料、HS Code、货值、发票和许可证适用情况。',
    href: 'https://infotradekenya.go.ke/procedure/322?includeSearch=true&l=en',
  },
  {
    label: '广州—内罗毕全货机航线线索',
    detail: '公开的CAN-NBO全货机信息可供东非路线筛选参考，但每票订舱前仍需核实当前运力、货类、单证和最终交付条件。',
    href: 'https://www.logupdateafrica.com/air-cargo/astral-aviation-resumes-weekly-nairobiguangzhou-freighter-service-1359939',
  },
]

const lunGatewayChecks = [
  '最终现场位于卢萨卡、恩多拉、基特韦、穆富利拉、钦戈拉，还是铜带矿区或其他项目地点？',
  'LUN能否接收最长件和最重件，还是应比较NLA或其他已核实的区域路线？',
  '起飞前，进口商、指定代理、AWB资料、发票、装箱单、HS Code及许可证或ZCSA核查是否已对齐？',
  '报价止于机场、包含清关协调，还是包括卸货后送至工厂、矿区或项目现场？',
]

const lunGatewayDecisionRows = [
  {
    gateway: '筛选LUN / 卢萨卡',
    finalSite: '卢萨卡，或经核实从卢萨卡出发的公路方案更合适的项目现场。',
    verify: '核实单件接收、中转衔接、机场交接、清关责任及后续卡车计划。',
  },
  {
    gateway: '筛选NLA / 恩多拉',
    finalSite: '恩多拉、基特韦或其他铜带地点；经核实后，从恩多拉交接可能缩短内陆段。',
    verify: '核实单件接收、当前中转、目的地操作、代理准备情况及现场交付。',
  },
  {
    gateway: '比较两者',
    finalSite: '最终现场、交付范围或超大件接收情况尚未确认。',
    verify: '比较完整可执行方案；不能只根据机场代码或较低机场运价决定路线。',
  },
]

const coreRouteModifiedDates: Partial<Record<Slug, string>> = {
  jnb: '2026-11-12',
  fbm: '2026-11-12',
  lun: '2026-11-12',
  lbv: '2026-11-12',
  abj: '2026-11-12',
  nbo: '2026-08-02',
  bko: '2026-07-19',
  cky: '2026-07-19',
  oua: '2026-07-19',
  ebb: '2026-07-19',
  add: '2026-07-19',
  cmn: '2026-07-19',
  kgl: '2026-07-30',
  hre: '2026-07-30',
}

const deepDives: Partial<Record<Slug, DeepDive>> = {
  jnb: {
    heading: 'JNB约翰内斯堡超大件路线说明',
    intro:
      '许多非洲超大件报价会以JNB作为比较路线，因为其机场操作、货运选项和内陆分拨条件通常优于不少次级节点。但不能因此假定JNB适用于所有南非货物。超大项目货仍需比较最终交付城市、卸货设备、清关代理准备情况，以及CPT或DUR是否更接近项目现场。',
    scenarios: [
      '用于南非工厂的矿业或工程备件，停工成本可能高于空运成本。',
      '可空运至JNB并通过受控卡车继续内陆运输的高价值汽车或工业零件。',
      '被中国直达方案拒收、可再评估经LGG/BRU或具备全货机条件的枢纽重新组板运输的超大件。',
    ],
    risks: [
      '客户需要送至矿区或工厂现场，报价却只包含机场到机场运输。',
      '忽略包装高度、叉车孔、吊点和卸货责任。',
      '将约翰内斯堡当作唯一答案，而开普敦或德班可能降低内陆运输成本。',
    ],
    salesAngle:
      '处理JNB询价时，不应只说“我们能空运到南非”；应请客户先提供尺寸和最终现场，再判断JNB是合适的入境点，还是仅看起来机场运价较低。',
  },
  fbm: {
    heading: 'FBM卢本巴希矿业货物路线说明',
    intro:
      'FBM是具有项目货运输需求的目的地，因为卢本巴希与铜带矿业供应链紧密相关。客户往往不是在采购普通运输，而是在应对生产、维修或现场期限压力。此路线中，清关代理能力、收货人准备情况及最终矿区交接与空运段同样重要。',
    scenarios: [
      '铜带矿业备件、泵、变压器、电气柜和维修设备。',
      '工厂紧急维修货；延误数日的损失可能高于运费。',
      '中国直达接收受限、需要评估欧洲中转和非洲枢纽延伸的重货。',
    ],
    risks: [
      '客户只提供“FBM机场”，实际目的地却是矿区或偏远工业现场。',
      '法文货物描述、HS Code和发票货值在不同文件中不一致。',
      '货物离开中国前没有确认目的地卸货条件。',
    ],
    salesAngle:
      'FBM业务应强调风险控制，而非低价运费。客户需要尽早了解路线是否可执行、哪些文件可能影响清关，以及最终交付责任从哪里开始。',
  },
  lun: {
    heading: 'LUN卢萨卡工业与矿业货物路线说明',
    intro:
      'LUN常用于赞比亚工业、矿业和维修货物。与FBM相比，当地商务沟通通常更容易使用英语，但仍需严格预先核实HS Code、许可证、收货人准备情况，以及最终交付是否超出卢萨卡。',
    scenarios: [
      '矿业支持设备、泵、电机、化工厂备件和发电机。',
      '稳定到货日期比最低运价更重要的工厂维修货。',
      '收货人需要在发货前获得清晰单证指导的赞比亚项目货。',
    ],
    risks: [
      '假定所有赞比亚货物都止于卢萨卡，而最终现场可能距机场较远。',
      '遗漏受管制工业品或化学品相关货物的许可证核查。',
      '低估高价值设备的包装、防潮和操作要求。',
    ],
    salesAngle:
      'LUN路线的关键价值是信息清晰：客户确认前一次说明路线、单证清单、清关事项和最终交付范围。',
  },
  lbv: {
    heading: 'LBV利伯维尔长货路线说明',
    intro:
      '长货不能按普通空运思路报价，因此LBV路线需要先判断操作可行性。8米货物可能需要B747F机鼻舱门装载、主甲板核查、欧洲中转及目的地地面操作确认。工厂和贸易商应在谈价格前先获得可行性判断。',
    scenarios: [
      '约6至8米、无法使用客机腹舱的长尺寸工程货。',
      '需要受控交接的油气、能源、建筑及中非项目货。',
      '被普通承运方案拒收、但可评估经B747F及LGG/BRU协调运输的货物。',
    ],
    risks: [
      '只核对重量，却忽略长度、重心和装载方向。',
      '目的地机场未能及时确认卸货设备或卡车通行条件。',
      '法文单证沟通过晚，清关描述与货物照片不一致。',
    ],
    salesAngle:
      'LBV业务应让客户清楚，真正需要判断的是可行性：能否装载、在哪里中转、由谁操作，以及投入费用前必须确认什么。',
  },
  los: {
    heading: 'LOS拉各斯重货路线说明',
    intro:
      'LOS进口需求较大，但尼日利亚货物对单证较敏感。运价只是整体结果的一部分；进口商资料、SONCAP或受管制货物核查、适用时的Form M、HS Code及当地代理能力都会影响实际到岸成本和时间安排。',
    scenarios: [
      '油气备件、工厂机械、电力设备及高价值紧急货物。',
      '清关准备情况比飞行时间更影响实际交付日期的工业货物。',
      '进入尼日利亚前需要评估欧洲中转或枢纽路线的重货。',
    ],
    risks: [
      '客户只比较运价，忽略目的地费用或清关风险。',
      '货物离境前缺少受管制货物所需文件。',
      '发票货值、HS Code和产品描述未按尼日利亚进口要求对齐。',
    ],
    salesAngle:
      'LOS服务应定位为到岸风险管理。应尽早说明，清关准备不足时，较低的空运报价也可能带来更高的后续成本。',
  },
  abj: {
    heading: 'ABJ阿比让及西非法语区路线说明',
    intro:
      'ABJ是科特迪瓦及周边西非法语区的重要门户。对中国工厂和贸易商而言，双语协调可能很重要：起运端使用中文或英语，目的地单证则需适配法语要求。',
    scenarios: [
      '工程机械零件、工业设备、能源项目货和超大件备件。',
      '直达选项有限、需要评估实际替代方案的西非项目货。',
      '收货人为法语使用者、需要控制单证措辞的货物。',
    ],
    risks: [
      '货物描述翻译不严谨，与HS Code或发票不一致。',
      '货物离开中国前未与当地代理和收货人对齐资料。',
      '未确认目的地操作条件就为超大件报价。',
    ],
    salesAngle:
      'ABJ沟通重点应是“减少信息传递偏差”。客户需要的是路线判断及中、英、法协调，而不只是按公斤计价。',
  },
  nbo: {
    heading: 'NBO内罗毕及东非分拨路线说明',
    intro:
      'NBO是东非重要货运枢纽之一，可服务肯尼亚项目，有时也可用于区域分拨；合适方案取决于货物止于内罗毕、送往肯尼亚其他城市，还是继续发往周边国家。',
    scenarios: [
      '用于肯尼亚或东非项目的通信、医疗、基础设施及工厂备件。',
      '与较小的最终目的机场相比，NBO可能提供更合适区域枢纽选项的项目货。',
      '需要同时考虑机场操作能力和内陆交付安排的超大件。',
    ],
    risks: [
      '客户需要内陆或跨境交付，却误把NBO当作最终目的地。',
      '订舱前未核实医疗或受管制货物许可证。',
      '易碎或高价值设备的包装和操作说明过于笼统。',
    ],
    salesAngle:
      'NBO业务应体现区域路线判断，协助客户决定在肯尼亚清关、转运内陆，还是采用其他东非路线。',
  },
  acc: {
    heading: 'ACC阿克拉项目货路线说明',
    intro:
      'ACC是加纳矿业、医疗、建筑及工业货物的重要西非目的地。除了将货物运至阿克拉，还应在客户确认前清楚说明目的地费用、清关文件和交付预期。',
    scenarios: [
      '矿业备件、医疗设备、工业机械和建筑项目货。',
      '需要可预期操作和清关准备的高价值或易碎设备。',
      '使用空运保障项目或维修排期的紧急货物。',
    ],
    risks: [
      '未说明目的地费用项目，客户只看到空运费用。',
      '进口商税务身份、许可证要求或产品分类资料尚未准备好。',
      '易碎或重型设备到达时，卸货和交付责任仍不明确。',
    ],
    salesAngle:
      'ACC业务应通过清楚说明报价包含项、不包含项，以及收货人在货物启运前需准备的资料来建立信任。',
  },
}

function getFaq(item: (typeof pages)[Slug]) {
  const commonFaq = [
    {
      question: `中国到${item.code} ${item.city}能否空运超大件货物？`,
      answer: `这取决于包装尺寸、毛重、吊点、可用机型及${item.code}目的地操作条件。对于大件，应先核实装载可行性，再讨论空运价格。`,
    },
    {
      question: `${item.code}什么情况下要考虑LGG/BRU欧洲中转？`,
      answer: `当中国直飞无法接收货物尺寸、重量或时效要求时，可考虑LGG/BRU。欧洲中转可能为非洲项目货提供可行的第二程选项，但必须逐票核实。`,
    },
    {
      question: `中国到${item.code}空运报价前需要哪些资料？`,
      answer: `请提供品名、HS Code、发票货值、装箱单、尺寸、毛重、包装照片、吊点、起运城市、目的地城市和最晚到货要求。受管制货物可能还需提供许可证。`,
    },
    {
      question: `${item.code}适合矿业或工程项目货吗？`,
      answer: `${item.business}关键不只是机场到机场运费，还要看清关、操作和内陆交付能否配合项目排期。`,
    },
  ]

  const nationwideOriginFaq = ['JNB', 'FBM', 'LUN', 'LBV'].includes(item.code)
    ? {
        question: `哪些中国起运机场可发往${item.code} ${item.city}？`,
        answer: `EASCargo会根据货物所在地和当前接收条件，比较PVG、HGH、NKG、CAN、SZX、HKG、PEK、PKX、TSN、TAO、XMN、FOC、WUH、CGO、CTU、TFU、CKG、XIY和HAK等起运选项。这些是可评估的起运地，并不代表有直飞服务。重货或超大件可能需要国内卡车送至更强枢纽、经全球枢纽中转或评估LGG/BRU主甲板方案。`,
      }
    : null

  if (item.code === 'LUN') {
    return [
      nationwideOriginFaq!,
      {
        question: '赞比亚项目货应到LUN卢萨卡还是NLA恩多拉？',
        answer:
          '应先核实最终现场、货物接收情况和完整交付责任，再选择机场。LUN可评估用于卢萨卡及赞比亚全国项目需求；恩多拉、基特韦和铜带矿区可考虑筛选NLA。机场代码本身不能证明当前有运力或可接收超大件。',
      },
      {
        question: 'LUN起运前应准备哪些赞比亚清关资料？',
        answer:
          '对齐进口商和指定清关代理、HS Code、商业发票、装箱单、AWB及分运单资料、货值、原产地，以及适用的许可证或ZCSA核查。ZRA空运电子舱单要求使到达前资料一致尤为重要。',
      },
      ...commonFaq.slice(0, 2),
    ]
  }

  if (item.code === 'LBV') {
    return [
      nationwideOriginFaq!,
      {
        question: '6-8米货物能否从中国空运到LBV利伯维尔？',
        answer:
          '有可能，但须按单件决定是否接收。EASCargo先核实包装尺寸、重量、重心、装载方向、吊点和箱体强度，再比较中国口岸集货、主甲板或B747F机鼻舱门装载可行性、中转操作及LBV卸货条件。每一操作段都接受实际货物前，不把路线或机型视为已确认。',
      },
      {
        question: '询价中国到LBV长货需要提供什么资料？',
        answer:
          '请提供工厂位置、备货日期、品名、HS Code、数量、每件包装尺寸和毛重、包装照片或图纸、吊点、已知重心、收货人资料及最终交付地点。报价应说明路线范围、操作假设、清关责任，以及需要机场提货还是送至项目现场。',
      },
      ...commonFaq.slice(0, 2),
    ]
  }

  if (item.code === 'FBM') {
    return [
      nationwideOriginFaq!,
      {
        question: 'FBM报价止于卢本巴希机场，还是包含Copperbelt矿区交付？',
        answer:
          '应在报价前确定范围。仅到FBM机场表示包含空运和机场交接；若送至矿区，还需协调清关、卡车可用性、道路及现场通行、卸货工具、收货预约，以及机场放货后的延误责任。',
      },
      {
        question: 'FBM起运前应准备哪些刚果金清关资料？',
        answer:
          '准备进口商和收货人资料、指定清关代理、HS Code、法文或双语货物描述、商业发票、装箱单、AWB/LTA资料、货值、原产地，以及该货类适用的GUICE、OCC/BIVAC、进口许可证或证书要求。',
      },
      {
        question: 'FBM矿业急件询价需要哪些货物数据？',
        answer:
          '请提供最终矿区或工厂、停工期限、备货日期、每件尺寸和毛重、包装照片、吊点、叉车孔、已知重心、危险品或电池属性，以及交付范围是机场提货还是现场交接。',
      },
      ...commonFaq.slice(0, 2),
    ]
  }

  if (item.code !== 'JNB') return nationwideOriginFaq ? [nationwideOriginFaq, ...commonFaq] : commonFaq

  return [
    {
      question: '哪些中国起运机场可发往JNB约翰内斯堡？',
      answer: nationwideOriginFaq!.answer,
    },
    {
      question: '货物能否从FOC福州空运到JNB约翰内斯堡？',
      answer:
        '可以将FOC作为EASCargo中国全国集货网络中的一个起运选项，但不将其描述为保证直飞服务。每票应比较FOC起运和中转接收情况，以及XMN、PVG、CAN、SZX、HKG或HAK接驳选项。判断取决于工厂位置、单件尺寸和重量、备货日期、当前机型运力、中转操作、JNB清关及最终交付方案。',
    },
    {
      question: '货物抵达JNB前，南非进口商需准备什么？',
      answer:
        '确认进口商或注册代理、海关编码、清关代理、HS Code、发票、装箱单、AWB资料及货物申报信息。受限制产品可能需要许可证、证书或授权函；旧货出运前可能需要ITAC进口管制。',
    },
    {
      question: 'JNB能否作为约翰内斯堡以外地区的交付入口？',
      answer:
        'JNB可用于评估内陆及部分跨境运输，但并非自动适用。需确认货物是在南非清关、保税运输还是过境运输，哪家承运人或卡车公司接收该件，以及由谁负责许可证、出口证明、卸货和最终现场交付。',
    },
    ...commonFaq,
  ]
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = pages[params.slug as Slug]
  const chinese = chineseDestinations[params.slug as Slug]
  if (!item) {
    return {
      title: 'Africa Air Freight from China | EASCARGO',
    }
  }

  const title = chinese
    ? currentMetadataTitle(params.slug as Slug, item, chinese)
    : `${item.title} | EASCARGO`
  const description = chinese
    ? currentMetadataDescription(params.slug as Slug, item, chinese)
    : item.description

  return {
    title,
    description,
    keywords: [
      ...(chinese?.keywords || []),
      ...(params.slug === 'jnb'
        ? ['中国各大机场到JNB空运', '华东到南非空运', '华南到JNB空运', '华北到JNB空运', 'FOC JNB空运']
        : params.slug === 'lun'
          ? ['中国各大机场到LUN空运', 'LUN全国集货空运', 'LUN还是NLA', '赞比亚ZRA ASYCUDA空运', '铜带矿区备件空运']
        : ['fbm', 'lbv'].includes(params.slug)
          ? [`中国各大机场到${item.code}空运`, `${item.code}全国集货空运`, `${item.code}项目货路线`]
        : []),
      `${item.code} air freight`,
      `China to ${item.city} air freight`,
      '中国到非洲空运',
      '非洲大件项目货',
      'LGG BRU欧洲中转',
      '矿业设备空运',
    ],
    alternates: {
      canonical: `https://www.eascargo.com/africa-air-freight/${params.slug}/`,
      ...(params.slug === 'jnb'
        ? {
            languages: {
              en: 'https://www.eascargo.com/en/africa-air-freight/jnb/',
              'zh-CN': 'https://www.eascargo.com/africa-air-freight/jnb/',
            },
          }
        : {}),
    },
    openGraph: {
      title,
      description,
      url: `https://www.eascargo.com/africa-air-freight/${params.slug}/`,
      type: 'website',
    },
  }
}

function currentMetadataTitle(
  slug: Slug,
  item: (typeof pages)[Slug],
  chinese: (typeof chineseDestinations)[Slug],
) {
  if (slug === 'jnb') return '中国到JNB约翰内斯堡空运 | 全国集货与项目货询价 | EASCargo'
  if (slug === 'fbm') return '中国到FBM卢本巴希空运 | 铜钴矿区备件与矿区交付 | EASCARGO'
  if (slug === 'lun') return 'LUN卢萨卡空运 | 中国各大机场到赞比亚项目货 | EASCARGO'
  if (slug === 'lbv') return '全国到LBV利伯维尔空运 | 加蓬超长货/B747F | EASCargo'
  if (slug === 'nbo') return 'NBO内罗毕空运 | 肯尼亚JKIA项目货和清关资料 | EASCARGO'
  if (slug === 'abj') return 'ABJ阿比让空运 | 科特迪瓦GUCE/FDI清关与项目货报价 | EASCargo'
  return `${item.code} ${chinese.city}空运 | 中国到${chinese.country}大件项目货 | EASCARGO`
}

function currentMetadataDescription(
  slug: Slug,
  item: (typeof pages)[Slug],
  chinese: (typeof chineseDestinations)[Slug],
) {
  if (slug === 'jnb') {
    return '中国各大口岸到JNB约翰内斯堡空运：全国集货，比较PVG、CAN、SZX、HKG、HAK、FOC、XMN等出口枢纽，再逐票核实主甲板、中转、SARS清关和南非项目现场交付。'
  }
  if (slug === 'fbm') {
    return '中国各大机场到FBM卢本巴希空运：全国集货、LGG/BRU主甲板、非洲Hub衔接、GUICE/法文资料、Lubumbashi机场卸货与Copperbelt矿区或工厂交付逐票判断。'
  }
  if (slug === 'lun') {
    return '中国各大机场到LUN卢萨卡空运：全国集货、LUN或NLA入口、ZRA/ASYCUDA资料、LGG/BRU主甲板及Lusaka/Copperbelt项目现场交付判断。'
  }
  if (slug === 'lbv') {
    return '全国集货到LBV利伯维尔空运：按单件尺寸判断6-8米超长货、B747F主甲板或LGG/BRU中转可行性，并核实加蓬清关、卸货和项目现场交付。'
  }
  if (slug === 'nbo') {
    return '中国到NBO内罗毕空运：结合肯尼亚JKIA项目货、PVoC/CoC、IDF、进口商KRA PIN、东非二程和最终现场交付边界做逐票判断。'
  }
  if (slug === 'abj') {
    return '中国到ABJ阿比让空运：比较全国集货、欧洲或非洲Hub中转和超限件装载，报价前核对GUCE账号、FDI、SYDAM/e-DAU、法文品名、目的港费用和科特迪瓦项目现场交付。'
  }
  return `中国到${item.code}${chinese.city}空运方案：${chinese.country}大件项目货、矿业备件、工程设备、LGG/BRU欧洲中转、清关资料和二程交付判断。`
}

export default function AfricaDestinationPage({ params }: { params: { slug: string } }) {
  const item = pages[params.slug as Slug] || pages.jnb
  const currentSlug = params.slug as Slug
  const chinese = chineseDestinations[currentSlug]
  const relatedPages = Object.entries(pages)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 8)
  const faq = getFaq(item)
  const deepDive = deepDives[currentSlug]
  const originStrategy = originStrategies[currentSlug]
  const coreRouteBrief = coreRouteBriefs[currentSlug]
  const isSouthAfricaCoastalRoute = currentSlug === 'cpt' || currentSlug === 'dur'
  const isNigeriaRoute = currentSlug === 'los'
  const isNboRoute = currentSlug === 'nbo'
  const customsReadiness = inlandAfricaCustomsReadiness[currentSlug]
  const isAddRouteProgramDestination = addRouteProgramDestinationSlugs.includes(currentSlug)
  const officialFacts =
    currentSlug === 'jnb'
      ? jnbOfficialFacts
      : currentSlug === 'fbm'
        ? fbmOfficialFacts
        : currentSlug === 'lun'
          ? lunOfficialFacts
          : isNboRoute
            ? nboOfficialFacts
            : null

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {coreRouteBrief && (
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <a href="/" aria-label="EASCARGO 首页" className="inline-flex min-h-9 items-center">
              <EascargoLogo markClassName="h-7 w-7" wordmarkClassName="text-sm" />
            </a>
          </div>
        </div>
      )}
      <section className={`bg-slate-950 px-6 text-white ${coreRouteBrief ? 'py-16 md:py-20' : 'py-24'}`}>
        <div className="mx-auto max-w-6xl">
          <a
            href={currentSlug === 'jnb' ? '/en/africa-air-freight/jnb/' : '/en/africa-oversized-air-freight/'}
            className="mb-10 inline-flex text-sm font-semibold text-amberGold"
          >
            {coreRouteBrief ? '英文版' : currentSlug === 'jnb' ? 'English版JNB路线' : 'English版：非洲超大件空运'}
          </a>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-semibold text-amberGold">
              <Plane className="h-4 w-4" />
              {chinese ? `${item.code} - ${chinese.city}，${chinese.country}` : `${item.code} - ${item.city}, ${item.country}`}
            </div>
            <h1 className={`font-bold leading-tight ${coreRouteBrief ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'}`}>
              {coreRouteBrief && chinese
                ? `中国到${chinese.city}（${item.code}）空运`
                : chinese
                ? currentSlug === 'jnb'
                  ? `中国各大口岸到 ${item.code} ${chinese.city} 空运`
                  : currentSlug === 'lbv'
                  ? `全国集货到 ${item.code} ${chinese.city} 空运`
                  : `中国到 ${item.code} ${chinese.city} 空运`
                : item.title}
              {chinese && !coreRouteBrief && <span className="block text-amberGold">{chinese.country}{chinese.city}项目货空运</span>}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {chinese
                ? currentSlug === 'jnb'
                  ? '比较FOC / XMN本地起运与全国口岸集运；再确认JNB机场交接，还是继续到南非其他城市或项目现场。'
                  : currentSlug === 'fbm'
                  ? '先确认目的地是FBM机场，还是刚果（金）铜带矿区或工厂；卸货、清关与现场交接责任按票区分。'
                  : currentSlug === 'lun'
                    ? '按赞比亚最终城市或项目现场比较LUN与NLA；分别说明机场提货、清关协助和内陆交付范围。'
                    : currentSlug === 'lbv'
                      ? '公开的约8米LBV记录仅作路线评估参考。报价前需核对单件尺寸、装载条件、中转接收与LBV卸货。'
                      : currentSlug === 'abj'
                        ? '先确认进口商与清关代理资料状态、GUCE / FDI / SYDAM / e-DAU资料及最终科特迪瓦城市。'
                        : `覆盖${chinese.country}大件项目货、矿业备件、工程设备和紧急空运。先判断尺寸重量、LGG/BRU欧洲中转、清关资料、机场操作和最终交付，再给可执行报价。`
                : item.description}
            </p>
            <a
              href={`/tools/africa-project-cargo-rfq/?source=route&topic=${item.code.toLowerCase()}`}
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950"
            >
              {chinese
                ? currentSlug === 'jnb'
                  ? `提交 ${item.code} 货物资料，获取路线判断`
                  : `提交 ${item.code} 逐票询价`
                : `Request a ${item.code} route review`}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {coreRouteBrief && (
        <section id="core-route-brief" className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <p className="text-sm font-semibold text-amber-700">{item.code} 询价准备</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">报价前先补充</h2>
            <div className="mt-7 grid gap-8 border-y border-slate-200 py-6 md:grid-cols-[0.7fr_1.3fr]">
              <h3 className="font-semibold text-slate-950">询价时请补充</h3>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {coreRouteBrief.fields.map((field) => (
                  <li key={field} className="border-l-2 border-amber-500 pl-3 text-sm leading-6 text-slate-700">{field}</li>
                ))}
              </ul>
            </div>
            {coreRouteBrief.caseNote && (
              <p className="mt-5 max-w-4xl text-sm leading-6 text-slate-600">{coreRouteBrief.caseNote}</p>
            )}
            <nav aria-label={`${item.code}相关资料`} className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {coreRouteBrief.links.map((link) => (
                <a key={link.href} href={link.href} className="inline-flex items-center gap-1 text-sm font-semibold text-amber-800 underline underline-offset-4 hover:text-slate-950">
                  {link.label}<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
        </section>
      )}

      <RouteSupplement enabled={Boolean(coreRouteBrief)}>
      <>
      {currentSlug === 'jnb' && (
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amberGold">FOC至JNB路线判断</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                FOC福州到JNB怎么走？
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                FOC可以作为福建工厂货到JNB的起运点，但不能在没有逐票确认时写成固定直飞、固定舱位或保证接受。
                报价时先比较FOC和XMN本地起运，再把国内集卡到更强出口枢纽的总成本、装载可行性和到货要求放在一起判断。
              </p>
              <a
                href="/tools/africa-project-cargo-rfq/?source=route&topic=jnb-foc"
                className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-amber-800 underline underline-offset-4 hover:text-slate-950"
              >
                提交FOC / JNB货物资料
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {jnbFocDecisionRows.map((row) => (
                <div key={row.label} className="grid gap-2 py-5 sm:grid-cols-[0.55fr_1.45fr] sm:gap-6">
                  <h3 className="font-semibold text-slate-950">{row.label}</h3>
                  <p className="leading-7 text-slate-600">{row.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">目的地概况</p>
            <h2 className="text-3xl font-bold md:text-4xl">{item.city}航线与货物特点</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{item.market}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <FileCheck2 className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">清关与单证核查</h3>
            </div>
            <p className="leading-7 text-slate-600">{item.customs}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6">
            <Globe2 className="mb-4 h-8 w-8 text-amberGold" />
            <h2 className="mb-3 text-2xl font-semibold">当地市场与进口特点</h2>
            <p className="leading-8 text-slate-600">{item.business}</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <Truck className="mb-4 h-8 w-8 text-amberGold" />
            <h2 className="mb-3 text-2xl font-semibold">商务沟通与协作</h2>
            <p className="leading-8 text-slate-600">{item.culture}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">适配货物类型</p>
            <h2 className="text-3xl font-bold md:text-4xl">优先核对的货物类型</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {item.cargo.map((cargo) => (
              <div key={cargo} className="flex gap-3 rounded-lg bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                <span className="leading-7 text-slate-600">{cargo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {routeSteps.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-slate-200 p-6">
              {index === 0 && <Plane className="mb-4 h-8 w-8 text-amberGold" />}
              {index === 1 && <Globe2 className="mb-4 h-8 w-8 text-amberGold" />}
              {index === 2 && <Truck className="mb-4 h-8 w-8 text-amberGold" />}
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="leading-7 text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">紧急备件路线判断</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              项目现场等不起时，先核对 {item.code} 路线风险，再谈运价。
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              对于矿业、油气、工厂维修或能源项目备件，首先要判断的不是最低机场到机场运价。承诺{item.code}到货方案前，应确认期限、机型适配、清关文件和最终现场交接。
            </p>
            <a
              href="/tools/africa-urgent-spare-parts-route-risk-checklist/"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              核对{item.code}紧急备件路线风险
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {urgentSparePartChecks.map((check) => (
              <div key={check} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mb-4 h-5 w-5 text-amberGold" />
                <p className="text-sm font-semibold leading-7 text-slate-700">{check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isSouthAfricaCoastalRoute && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">CPT/DUR路线判断</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            经 JNB 转运前，先核对南非沿海清关与最终交付条件。
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            对于开普敦或德班的海事、港口、工厂及工业备件，路线判断不能只看HAK/JNB运力或最低机场运价。还应比较SARS文件准备情况、ITAC或NRCS风险、沿海最终交付条件，以及经JNB是否会增加不必要的内陆运输时间。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/insights/south-africa-cpt-dur-sars-invoice-itac-nrcs-air-freight-clearance/"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              查看CPT/DUR清关文件核对
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/insights/south-africa-cpt-dur-port-marine-equipment-air-freight/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
            >
              查看CPT/DUR港口及海事备件路线
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          {southAfricaCoastalChecks.map((check) => (
            <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
              <p className="leading-7 text-slate-700">{check}</p>
            </div>
          ))}
        </div>
      </section>}

      {isNigeriaRoute && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">尼日利亚路线判断</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            区分拉各斯进口需求与 PHC 油气项目的现场交付风险。
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            尼日利亚重货可能看似只是询问LOS运价，但油气备件往往需要先判断是否应经PHC或送往哈科特港，并在订舱前明确进口商资料要求和交接范围。路线方案还应考虑Form M、PAAR、SONCAP、B&apos;Odogwu资料及最终现场的时限要求。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/insights/nigeria-phc-oil-gas-spares-soncap-nsw-air-freight-clearance/"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              核对PHC油气备件清关资料
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/insights/nigeria-los-soncap-formm-paar-air-freight/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
            >
              核对SONCAP、Form M、PAAR及NSW准备情况
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          {nigeriaOilGasChecks.map((check) => (
            <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
              <p className="leading-7 text-slate-700">{check}</p>
            </div>
          ))}
        </div>
      </section>}

      {isNboRoute && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">NBO枢纽路线判断</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            将内罗毕作为东非路线节点评估，不只比较肯尼亚机场价格。
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            JKIA现代化规划及公开的CAN-NBO全货机线索，使NBO值得作为区域货运枢纽继续评估；但每票中国起运项目货仍需核实运力、文件和交接。订舱前应区分肯尼亚清关与东非后续交付，并确认PVoC、IDF、进口商准备情况和最终现场责任。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/insights/guangzhou-nairobi-freighter-can-nbo-east-africa-air-cargo/"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              核实CAN-NBO全货机线索
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/insights/kenya-nbo-pvoc-idf-air-freight-documents/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
            >
              核对NBO的PVoC与IDF资料
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/insights/east-africa-nbo-ebb-dar-project-cargo/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
            >
              比较NBO、EBB与DAR项目货路线
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          {nboGatewayChecks.map((check) => (
            <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
              <p className="leading-7 text-slate-700">{check}</p>
            </div>
          ))}
        </div>
      </section>}

      {customsReadiness && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">{customsReadiness.eyebrow}</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">{customsReadiness.heading}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{customsReadiness.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={customsReadiness.primaryHref}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              {customsReadiness.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={customsReadiness.secondaryHref}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
            >
              {customsReadiness.secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          {customsReadiness.checks.map((check) => (
            <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
              <p className="leading-7 text-slate-700">{check}</p>
            </div>
          ))}
        </div>
      </section>}

      {isAddRouteProgramDestination && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">ADD路线方案判断</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            只有全程方案更合适时，才比较 ET/ADD 中转与常规 {item.code} 路线。
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Ethiopian的中非货运布局使ADD值得纳入部分非洲货物的路线筛选，但中转价格较低并不足以决定方案。选择该路线前，核实起运地调整、ADD第二程接收、目的地文件及{item.code}最终交接安排。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/route-programs/et-asia-africa-via-add/"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              比较{item.code}的ET/ADD路线方案
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
            >
              查看ET/ADD非洲空运指南
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          {addRouteProgramChecks.map((check) => (
            <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
              <p className="leading-7 text-slate-700">{check}</p>
            </div>
          ))}
        </div>
      </section>}

      {originStrategy && (
        <>
          <section className="border-y border-slate-200 bg-slate-50 py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className="max-w-4xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">
                  中国起运口岸至{item.code}
                </p>
                <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">{originStrategy.heading}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{originStrategy.intro}</p>
              </div>
              {currentSlug === 'lbv' && (
                <article className="mt-10 max-w-4xl border-l-4 border-amberGold bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wider text-amberGold">LBV长货路线判断</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">
                    6-8米超长货能否空运到LBV，先用实际包装尺寸逐段验收。
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    EASCargo先核对每件货物的包装长宽高、毛重、重心、装载方向、吊点和箱体强度，再比较全国集货口岸、
                    主甲板或B747F开鼻门装载、LGG/BRU或其他可确认中转方案、LBV卸货设备和最终项目现场交付。
                    页面提到的机场和机型都是待比较选项，只有实际货物获得全程逐段接受后，路线才算可执行。
                  </p>
                </article>
              )}
              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {chinaOriginClusters.map((cluster) => (
                  <article key={cluster.region} className="rounded-lg border border-slate-200 bg-white p-6">
                    <h3 className="text-xl font-semibold text-slate-950">{cluster.region}</h3>
                    <p className="mt-2 font-bold text-amberGold">{cluster.airports}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-500">{cluster.coverage}</p>
                    <p className="mt-3 leading-7 text-slate-700">{cluster.decision}</p>
                  </article>
                ))}
              </div>
              <div className="mt-14 max-w-4xl">
                <h3 className="text-2xl font-bold text-slate-950">四类路线框架</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  起运机场只是第一步。舱位、机型、中转接受、主甲板尺寸、清关和最终交付必须按票组合判断。
                </p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {originStrategy.routeOptions.map((option) => (
                  <article key={option.title} className="rounded-lg border border-slate-200 bg-white p-6">
                    <h3 className="text-xl font-semibold text-slate-950">{option.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{option.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {currentSlug === 'jnb' && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">HAK/JNB运力线索</p>
              <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                确认南非项目货路线前，先核实海口至约翰内斯堡的运力信息。
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                对于南非矿业、汽车、电子、医药或工业备件，关键不只是确认是否有飞往JNB的航班。还需核实货物能否使用HAK/JNB全货机线索、超大件是否仍应评估LGG/BRU，以及由谁负责JNB清关和最终现场交接。
              </p>
              <a
                href="/insights/haikou-johannesburg-freighter-china-africa-project-cargo/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
              >
                查看HAK-JNB项目货路线核对
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-3">
              {jnbCapacityChecks.map((check) => (
                <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                  <p className="leading-7 text-slate-700">{check}</p>
                </div>
              ))}
            </div>
          </section>}

          {currentSlug === 'fbm' && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">FBM交接范围判断</p>
              <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                报价前先区分 FBM 机场段与铜带矿区现场交付。
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                有效的FBM报价必须说明责任止于何处。机场到机场、FBM机场提货、协助清关放货和矿区现场交接属于不同服务范围。对于停机检修备件，应先了解最终矿区或工厂、进口商和代理准备情况、卸货设备及期限，再比较机场运价。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/insights/fbm-copperbelt-mining-equipment-air-freight/"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
                >
                  查看FBM铜带矿业货物指南
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/insights/drc-fih-dgda-guice-occ-air-freight-clearance/"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
                >
                  核对刚果（金）GUICE与OCC/BIVAC资料
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              {fbmHandoverChecks.map((check) => (
                <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                  <p className="leading-7 text-slate-700">{check}</p>
                </div>
              ))}
            </div>
          </section>}

          {currentSlug === 'lun' && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">LUN或NLA入境点判断</p>
              <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                按最终地点选择赞比亚入境机场，不只比较最低机场运价。
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                LUN和NLA对应不同的项目区域。中国全国集货报价应先比较货物适配、当前中转接收、ZRA资料准备、机场交接以及卡车或现场交付范围，再选择卢萨卡或恩多拉。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/insights/zambia-lun-zra-asycuda-zcsa-air-freight-clearance/"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
                >
                  核对LUN清关文件
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/insights/ndola-nla-zra-asycuda-aci-copperbelt-mining-air-freight-clearance/"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
                >
                  比较NLA铜带矿区入境方案
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                {lunGatewayDecisionRows.map((row) => (
                  <div key={row.gateway} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <h3 className="font-semibold text-slate-950">{row.gateway}</h3>
                    <div>
                      <p className="leading-7 text-slate-700">{row.finalSite}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-500"><strong>核实：</strong>{row.verify}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {lunGatewayChecks.map((check) => (
                <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                  <p className="leading-7 text-slate-700">{check}</p>
                </div>
              ))}
            </div>
          </section>}

          {officialFacts && <section className="bg-slate-950 py-20 text-white">
            <div className="mx-auto max-w-6xl px-6">
              <div className="max-w-4xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">资料来源与核验范围</p>
                <h2 className="text-3xl font-bold md:text-4xl">本路线评估采用的 {item.code} 资料</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  这些来源用于支持机场、清关及网络信息，不代表对当前航班、舱位、运价、清关时间或卡车接收作出保证；EASCargo会按具体货物逐票重新确认。
                </p>
              </div>
              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {officialFacts.map((fact) => (
                  <div key={fact.label} className="grid gap-3 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-amberGold hover:text-white"
                    >
                      {fact.label}
                    </a>
                    <p className="leading-7 text-slate-300">{fact.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>}
        </>
      )}

      {deepDive && (
        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">重点路线分析</p>
              <h2 className="text-3xl font-bold md:text-4xl">{deepDive.heading}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{deepDive.intro}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-6">
                <h3 className="mb-4 text-xl font-semibold">适用场景</h3>
                <div className="space-y-3">
                  {deepDive.scenarios.map((scenario) => (
                    <div key={scenario} className="flex gap-3 text-slate-600">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                      <p className="leading-7">{scenario}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-6">
                <h3 className="mb-4 text-xl font-semibold">常见风险点</h3>
                <div className="space-y-3">
                  {deepDive.risks.map((risk) => (
                    <div key={risk} className="flex gap-3 text-slate-600">
                      <FileCheck2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                      <p className="leading-7">{risk}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-slate-950 p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold text-amberGold">向客户说明路线方案</h3>
                <p className="leading-8 text-slate-300">{deepDive.salesAngle}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">询价资料清单</p>
            <h2 className="text-3xl font-bold md:text-4xl">询价 {item.code} 航线前，请提供这些资料</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              超大件空运若缺少这些资料，低价报价通常无法说明完整方案。该清单用于判断货物能否装载、中转、清关和交付。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {(currentSlug === 'fbm' ? fbmQuoteFields : currentSlug === 'lun' ? lunQuoteFields : quoteFields).map((field) => (
              <div key={field} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold leading-6 text-slate-200">
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">常见问题</p>
          <h2 className="text-3xl font-bold md:text-4xl">中国到 {item.code} 空运常见问题</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {faq.map((entry) => (
            <div key={entry.question} className="rounded-xl border border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">{entry.question}</h3>
              <p className="leading-7 text-slate-600">{entry.answer}</p>
            </div>
          ))}
        </div>
      </section>
      </>
      </RouteSupplement>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">相关目的地</p>
            <h2 className="text-3xl font-bold md:text-4xl">可比较的其他非洲项目货路线</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedPages.map(([slug, page]) => (
              <a
                key={slug}
                href={`/africa-air-freight/${slug}/`}
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amberGold"
              >
                <div className="mb-2 text-2xl font-bold">{page.code}</div>
                <div className="font-semibold text-amberGold">{page.city}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{page.country}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: item.title,
            provider: { '@type': 'Organization', '@id': 'https://www.eascargo.com/#organization', name: 'EASCARGO', url: 'https://www.eascargo.com' },
            areaServed: item.country,
            serviceType: '超大件空运及项目货路线规划',
            description: item.description,
            url: `https://www.eascargo.com/africa-air-freight/${currentSlug}/`,
            ...(coreRouteModifiedDates[currentSlug]
              ? {
                  mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `https://www.eascargo.com/africa-air-freight/${currentSlug}/`,
                    dateModified: coreRouteModifiedDates[currentSlug],
                  },
                }
              : {}),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'EASCargo', item: 'https://www.eascargo.com/' },
              { '@type': 'ListItem', position: 2, name: '非洲空运', item: 'https://www.eascargo.com/africa-air-freight/' },
              {
                '@type': 'ListItem',
                position: 3,
                name: `${item.code} ${item.city}`,
                item: `https://www.eascargo.com/africa-air-freight/${currentSlug}/`,
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((entry) => ({
              '@type': 'Question',
              name: entry.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: entry.answer,
              },
            })),
          }),
        }}
      />
    </main>
  )
}
