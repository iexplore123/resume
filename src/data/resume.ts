import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/51986002?v=4',
    hidden: false,
  },
  profile: {
    name: '芦军均 (iex123)',
    email: 'i_seek-you@foxmail.com',
    mobile: '156****1195',
    github: 'https://github.com/iexplore123',
    zhihu: '',
    workExpYear: '具有一定的电子DIY经验',
    workPlace: '',
    positionTitle: '实习',
  },
  educationList: [
    {
      edu_time: ['2022.09.01', '2026.06.30'],
      school: '江苏师范大学',
      major: '电子信息工程',
      academic_degree: '本科',
    },
  ],
  awardList: [
    {
      award_time: '2023',
      award_info: '英语 CET6',
    },
    {
      award_time: '2023',
      award_info: '二等奖学金、三好学生',
    },
    {
      award_time: '2024',
      award_info: 'EEWorld论坛：测评Thingy:91X物联网开发原型机',
    },
    {
      award_time: '2025',
      award_info: '电子森林MakeBlocks：完成简单电路模块设计',
    },
  ],
  workExpList: [],
  skillList: [
    {
      skill_name: '编程语言',
      skill_desc:
        'C/C++、Python、Java、Go\n具有一定的代码实践能力，编译过一些相关的开源项目',

      skill_level: 80,
    },
    {
      skill_name: '工具与框架',
      skill_desc:
        'Linux、Git、VScode、Docker\n能够熟练使用相关工具和查阅相关资料',

      skill_level: 90,
    },
    {
      skill_name: '前端技术',
      skill_desc:
        'React、Gatsby、Serverless部署\n进行过一些简单的尝试，有过一些创意的想法',

      skill_level: 80,
    },
    {
      skill_name: '嵌入式开发',
      skill_desc:
        'Zephyr、Arduino、ESP-IDF、Platformio\n可以查阅例程进行一定程度的修改并组合功能',
      skill_level: 85,
    },
  ],
  projectList: [
    {
      project_time: '2022-2023',
      project_name: 'ESP32 DAPlink',
      project_role: '',
      project_desc: '基于 ESP32-S3 开发无线调试工具。',
      project_content:
        '复刻基于esp32s3的Daplink并调试其功能，实现了对设备进行远程调试的的需求。',
    },
    {
      project_time: '2023-2024',
      project_name: 'RV1106 嵌入式人脸识别部署',
      project_role: '',
      project_desc:
        '在嵌入式设备 RV1106 上部署 InsightFace 人脸识别算法，并优化其运行效率。',
      project_content:
        ' 配置交叉编译工具链，训练并转换模型，调整模型结构，并利用其 NPU 提升推理性能。\n使用 RetinaFace 进行轻量级人脸检测，并实现 OpenCV 的视频流实时处理。',
    },
  ],
  workList: [],
  aboutme: {
    aboutme_desc:
      '自我定位：本科电子信息工程专业背景，擅长嵌入式开发、网络通信及相关技术应用，热爱技术钻研并关注管理与协作。\n职业目标：寻求技术岗位，未来期望通过项目管理实践向开发管理岗位发展。',
  },
  // 国际化
  locales: {},
};
