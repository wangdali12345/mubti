// MBTI 64型人格测试 - 正版
// 包含完整的64道测试题和16种人格类型分析

// 测试题库
const questions = [
    // E/I 维度 (1-16)
    {
        id: 1,
        text: "在社交聚会中，您通常会：",
        options: ["主动与陌生人交谈，享受热闹的氛围", "倾向于与熟人交流，更喜欢安静的角落"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 2,
        text: "当您感到疲劳时，您更愿意：",
        options: ["和朋友一起活动来恢复精力", "独自安静地休息来恢复精力"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 3,
        text: "在工作环境中，您更喜欢：",
        options: ["开放的办公空间，便于交流", "独立的工作空间，便于专注"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 4,
        text: "周末计划时，您通常倾向于：",
        options: ["参加社交活动或聚会", "在家休息或进行安静的活动"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 5,
        text: "在做决定时，您更倾向于：",
        options: ["与他人讨论并获得意见", "独自思考并做出决定"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 6,
        text: "在新的环境中，您会：",
        options: ["很快就适应并开始社交", "需要时间观察和适应"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 7,
        text: "您的能量主要来源于：",
        options: ["与他人的互动和交流", "独处时的思考和反省"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 8,
        text: "在团队项目中，您更喜欢：",
        options: ["积极参与讨论和头脑风暴", "专注于自己的部分并提供深思熟虑的建议"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 9,
        text: "在公开场合演讲时，您会感到：",
        options: ["兴奋和享受", "紧张和不安"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 10,
        text: "您的理想假期是：",
        options: ["和朋友一起的团体旅行", "独自或与亲近家人的安静假期"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 11,
        text: "在聚会中，您通常会：",
        options: ["成为话题的发起者", "倾听他人的谈话"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 12,
        text: "当遇到困难时，您首先会：",
        options: ["寻求他人的帮助和建议", "独自思考解决方案"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 13,
        text: "在会议中，您更愿意：",
        options: ["积极参与讨论", "在充分思考后再发言"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 14,
        text: "您的朋友圈通常：",
        options: ["广泛但不太深入", "小范围但关系深入"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 15,
        text: "在学习新技能时，您更喜欢：",
        options: ["与他人一起学习讨论", "独立研究练习"],
        dimension: "EI",
        value: [1, 0]
    },
    {
        id: 16,
        text: "在日常生活中，您更关注：",
        options: ["外部的人和事", "内心的想法和感受"],
        dimension: "EI",
        value: [1, 0]
    },
    
    // S/N 维度 (17-32)
    {
        id: 17,
        text: "在学习新事物时，您更注重：",
        options: ["具体的实际应用", "理论概念和可能性"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 18,
        text: "在工作中，您更喜欢：",
        options: ["有明确步骤的任务", "可以发挥创造力的项目"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 19,
        text: "在阅读时，您更偏爱：",
        options: ["事实和细节丰富的内容", "富有想象力和概念性的内容"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 20,
        text: "当别人解释问题时，您更关心：",
        options: ["具体的事实和细节", "整体的概念和意义"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 21,
        text: "您的思维方式更倾向于：",
        options: ["循序渐进，关注现实", "跳跃式思考，关注可能性"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 22,
        text: "在解决问题时，您更依赖：",
        options: ["过去的经验和已知方法", "直觉和创新想法"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 23,
        text: "在会议中，您更关注：",
        options: ["具体的计划和执行细节", "愿景和长远目标"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 24,
        text: "您更信任：",
        options: ["可验证的事实和数据", "直觉和灵感"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 25,
        text: "在创意工作中，您更倾向于：",
        options: ["改进现有的方法", "创造全新的概念"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 26,
        text: "当面对复杂情况时，您首先会：",
        options: ["收集具体的 factual 信息", "寻找模式和联系"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 27,
        text: "您更欣赏：",
        options: ["实用主义和现实性", "创新性和原创性"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 28,
        text: "在日常对话中，您更喜欢讨论：",
        options: ["具体的事件和经历", "想法和概念"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 29,
        text: "在艺术欣赏方面，您更注重：",
        options: ["技巧和细节", "情感和象征意义"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 30,
        text: "在制定计划时，您更关注：",
        options: ["现实的可行步骤", "长远的目标和愿景"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 31,
        text: "您更容易记住：",
        options: ["具体的事实和数字", "整体的概念和感受"],
        dimension: "SN",
        value: [0, 1]
    },
    {
        id: 32,
        text: "在讨论未来时，您更倾向于：",
        options: ["基于现实的预测", "探索各种可能性"],
        dimension: "SN",
        value: [0, 1]
    },
    
    // T/F 维度 (33-48)
    {
        id: 33,
        text: "在做决定时，您更注重：",
        options: ["逻辑和客观分析", "价值观和他人感受"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 34,
        text: "在解决冲突时，您更倾向于：",
        options: ["分析事实找出真理", "寻求和谐与理解"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 35,
        text: "当批评他人时，您更关注：",
        options: ["逻辑错误和问题", "可能造成的伤害"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 36,
        text: "在选择工作时，您更重视：",
        options: ["能力认可和成就", "帮助他人和有意义的工作"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 37,
        text: "在团队合作中，您更看重：",
        options: ["效率和结果", "团队和谐和个人成长"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 38,
        text: "当朋友求助时，您首先会：",
        options: ["分析问题提供建议", "倾听理解给予情感支持"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 39,
        text: "您认为正义更应基于：",
        options: ["客观的规则和公平", "具体情况和个人需求"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 40,
        text: "在评价他人时，您更关注：",
        options: ["能力和成就", "品格和动机"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 41,
        text: "在辩论中，您更愿意：",
        options: ["坚持逻辑论证", "寻求共识和理解"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 42,
        text: "面对道德困境时，您更依赖：",
        options: ["理性原则和规则", "同理心和个人价值观"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 43,
        text: "您更欣赏领导者：",
        options: ["果断理智的决策", "关怀他人的领导风格"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 44,
        text: "在给出反馈时，您更注重：",
        options: ["建设性的批评", "鼓励和肯定"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 45,
        text: "在处理人际关系时，您更重视：",
        options: ["诚实和直接", "体贴和和谐"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 46,
        text: "您认为成功更应基于：",
        options: ["客观的成就和能力", "对他人和社会的贡献"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 47,
        text: "在面对错误时，您更关注：",
        options: ["找出原因防止再犯", "如何弥补和修复关系"],
        dimension: "TF",
        value: [1, 0]
    },
    {
        id: 48,
        text: "在沟通中，您更倾向于：",
        options: ["直接坦诚地表达", "委婉地考虑他人感受"],
        dimension: "TF",
        value: [1, 0]
    },
    
    // J/P 维度 (49-64)
    {
        id: 49,
        text: "在计划旅行时，您更倾向于：",
        options: ["详细制定行程计划", "保持灵活性随时决定"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 50,
        text: "在工作环境中，您更喜欢：",
        options: ["有明确的时间表和截止日期", "灵活的工作安排"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 51,
        text: "在处理任务时，您更愿意：",
        options: ["按计划逐步完成", "根据灵感随时调整"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 52,
        text: "在房间整理方面，您更倾向于：",
        options: ["保持整洁有序", "相对随性"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 53,
        text: "面对截止日期时，您会：",
        options: ["提前完成以避免压力", "在压力下激发潜力"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 54,
        text: "在学习新事物时，您更喜欢：",
        options: ["系统化有计划地学习", "探索性地自由学习"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 55,
        text: "在周末安排上，您更倾向于：",
        options: ["提前制定计划", "随性而为"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 56,
        text: "在购物时，您通常会：",
        options: ["列出清单按计划购买", "冲动购买或看到什么买什么"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 57,
        text: "在项目管理中，您更重视：",
        options: ["时间表和里程碑", "适应变化和灵活性"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 58,
        text: "面对意外情况时，您会：",
        options: ["感到不安并尽快恢复秩序", "觉得兴奋并享受变化"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 59,
        text: "在开始新项目时，您首先会：",
        options: ["制定详细的计划和步骤", "立即开始并逐步调整"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 60,
        text: "您更喜欢：",
        options: ["事情有明确的开始和结束", "过程保持开放性"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 61,
        text: "在决策时，您更倾向于：",
        options: ["快速决定并坚持执行", "保留选择余地随时调整"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 62,
        text: "在面对多种选择时，您会：",
        options: ["系统分析后做出选择", "保持开放不急于决定"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 63,
        text: "您认为生活更应该是：",
        options: ["有计划有条理的", "充满可能性和变化的"],
        dimension: "JP",
        value: [1, 0]
    },
    {
        id: 64,
        text: "在完成工作时，您更注重：",
        options: ["按时完成任务", "在过程中享受创造的乐趣"],
        dimension: "JP",
        value: [1, 0]
    }
];

// 人格类型详细分析
const personalityTypes = {
    "INTJ": {
        title: "建筑师",
        subtitle: "富有想象力和战略性的思想家",
        description: "INTJ型人格被称为'建筑师'，他们是具有战略思维和创新精神的思想家。他们善于看到全局，制定长期计划，并坚持不懈地朝着目标努力。INTJ通常是独立、自信和有决断力的，他们相信理性和逻辑，追求知识和技术。",
        strengths: [
            "具有卓越的战略思维和长远规划能力",
            "独立自主，不轻易受他人影响",
            "逻辑清晰，善于分析复杂问题",
            "对自己设定的目标坚定不移",
            "能够看到他人忽略的模式和联系",
            "对知识和技能的渴望永不停止"
        ]
    },
    "INTP": {
        title: "思想家",
        subtitle: "具有创新精神的逻辑学家",
        description: "INTP型人格是具有创新精神的逻辑学家，他们对知识和理解有着强烈的渴求。他们善于分析系统，发现不一致之处，并探索抽象概念。INTP通常很安静，喜欢独处思考，但他们的大脑总是在运转，寻找新的想法和可能性。",
        strengths: [
            "出色的逻辑分析能力",
            "创新思维，善于发现新的可能性",
            "客观公正，不受情感干扰判断",
            "适应性强，乐于学习新知识",
            "善于发现系统中的不一致之处",
            "对复杂概念的深入理解能力"
        ]
    },
    "ENTJ": {
        title: "指挥官",
        subtitle: "天生的领导者和战略家",
        description: "ENTJ型人格是天生的领导者，他们具有强烈的决心和远见。他们善于制定策略，组织资源，并激励他人朝着共同的目标努力。ENTJ自信、果断，在挑战面前从不退缩，他们享受竞争，并渴望成功。",
        strengths: [
            "卓越的领导能力和战略思维",
            "果断决策，不拖泥带水",
            "强烈的目标导向和执行力",
            "善于激励和鼓舞他人",
            "面对挑战时毫不畏惧",
            "能够将复杂想法转化为具体计划"
        ]
    },
    "ENTP": {
        title: "辩论家",
        subtitle: "聪明好奇的思想家",
        description: "ENTP型人格是聪明好奇的思想家，他们喜欢探索新的想法和可能性。他们善于辩论，能够快速思考，并享受智力挑战。ENTP充满激情，富有创造力，总是在寻找新的体验和知识。",
        strengths: [
            "出色的辩论和说服能力",
            "创新思维，善于产生新想法",
            "适应性强，乐于接受挑战",
            "善于发现不同观点之间的联系",
            "充满激情和活力",
            "快速学习和掌握新技能"
        ]
    },
    "INFJ": {
        title: "提倡者",
        subtitle: "富有洞察力和理想主义的辅导员",
        description: "INFJ型人格是最稀有的人格类型之一，他们具有深刻的洞察力和强烈的理想主义。他们关心他人的福祉，致力于帮助他人实现潜能。INFJ富有同理心，能够理解他人的情感和动机，同时保持一定的客观性。",
        strengths: [
            "深刻的洞察力和直觉",
            "强烈的同理心和关爱他人",
            "富有创造力和想象力",
            "坚定的价值观和信念",
            "善于激励和启发他人",
            "能够看到他人最好的方面"
        ]
    },
    "INFP": {
        title: "调停者",
        subtitle: "富有诗意和理想主义的治愈者",
        description: "INFP型人格是富有诗意和理想主义的治愈者，他们被强烈的价值观和对和谐的渴望所驱动。他们忠诚、善良，总是希望看到他人最好的一面。INFP富有创造力，通常在艺术和写作方面有天赋。",
        strengths: [
            "强烈的价值观和道德准则",
            "富有创造力和想象力",
            "忠诚可靠，对朋友关怀备至",
            "善于理解和接纳他人",
            "追求和谐，避免冲突",
            "对美的感知和欣赏能力"
        ]
    },
    "ENFJ": {
        title: "主人公",
        subtitle: "富有魅力和鼓舞人心的领导者",
        description: "ENFJ型人格是天生的领导者，他们富有魅力、善于激励他人。他们关心他人的成长和福祉，致力于创造和谐的环境。ENFJ具有强烈的社会责任感，总是希望能够让世界变得更美好。",
        strengths: [
            "天然的领导魅力和影响力",
            "强烈的同理心和人际技能",
            "善于激励和鼓舞他人",
            "对社会责任的深刻认识",
            "创造和谐环境的能力",
            "对他人需求的敏感度"
        ]
    },
    "ENFP": {
        title: "竞选者",
        subtitle: "热情洋溢、富有创造力的精神领袖",
        description: "ENFP型人格是热情洋溢、富有创造力的精神领袖。他们被对人类潜能的信念所驱动，总是看到每个人最好的一面。ENFP善于社交，富有感染力，能够激励他人追求梦想和目标。",
        strengths: [
            "热情洋溢，富有感染力",
            "出色的社交能力和人际技巧",
            "创造力和想象力丰富",
            "善于激励和启发他人",
            "适应性强，乐于接受新事物",
            "对人性潜力的深刻信念"
        ]
    },
    "ISTJ": {
        title: "物流师",
        subtitle: "实用且注重事实的物流管理者",
        description: "ISTJ型人格是最常见的人格类型之一，他们被认为是社会的支柱。他们注重事实，有责任感，致力于履行自己的义务。ISTJ传统、务实，总是尽力做到最好，他们相信规则和秩序的重要性。",
        strengths: [
            "强烈的责任感和可靠性",
            "注重细节和事实",
            "诚实正直，值得信赖",
            "规划和组织能力出色",
            "忠诚可靠，履行承诺",
            "实用主义和常识判断"
        ]
    },
    "ISFJ": {
        title: "守护者",
        subtitle: "非常专注和温暖的守护者",
        description: "ISFJ型人格是非常专注和温暖的守护者，他们总是准备保护心爱的人。他们细心、周到，能够记住关于他人的重要细节。ISFJ谦虚、勤奋，致力于创造和维护和谐的环境。",
        strengths: [
            "温暖友善，关爱他人",
            "细心周到，注重细节",
            "可靠负责，履行承诺",
            "创造和维护和谐环境",
            "耐心倾听和同理心",
            "对传统的尊重和维护"
        ]
    },
    "ESTJ": {
        title: "总经理",
        subtitle: "出色的管理者和传统的维护者",
        description: "ESTJ型人格是出色的管理者，他们代表传统和秩序。他们重视规则和标准，致力于确保每个人都遵守。ESTJ果断、实际，总是努力创造和维护稳定的环境。",
        strengths: [
            "卓越的组织和管理能力",
            "果断决策，执行力强",
            "重视规则和标准",
            "实际务实，注重效率",
            "领导能力强，善于组织",
            "对传统和秩序的维护"
        ]
    },
    "ESFJ": {
        title: "执政官",
        subtitle: "极其关心他人、善于交际的关怀者",
        description: "ESFJ型人格是极其关心他人、善于交际的人，他们总是渴望帮助他人。他们对社会和谐非常敏感，总是努力确保每个人的需求都得到满足。ESFJ忠诚、负责，是值得信赖的朋友和同事。",
        strengths: [
            "强烈的人际关系技能",
            "对他人的关心和帮助",
            "创造和谐环境的能力",
            "忠诚可靠，值得信赖",
            "出色的组织和协调能力",
            "对传统的重视和维护"
        ]
    },
    "ISTP": {
        title: "鉴赏家",
        subtitle: "大胆而实际的实验家",
        description: "ISTP型人格是大胆而实际的实验家，他们擅长使用各种工具。他们喜欢动手实践，通过直接经验来理解世界。ISTP冷静、理性，在危机中表现出色，他们享受自由和灵活性。",
        strengths: [
            "出色的动手能力",
            "冷静理性，危机处理能力强",
            "适应性强，享受灵活性",
            "实用主义和问题解决能力",
            "独立自主，不依赖他人",
            "对工具和技术的掌握"
        ]
    },
    "ISFP": {
        title: "探险家",
        subtitle: "灵活而有魅力的艺术家",
        description: "ISFP型人格是灵活而有魅力的艺术家，他们总是活在当下。他们对美和艺术有敏锐的感觉，总是寻找新的体验。ISFP善良、敏感，致力于创造和谐的环境。",
        strengths: [
            "强烈的审美感和艺术天赋",
            "善良敏感，关爱他人",
            "适应性强，活在当下",
            "创造和谐环境的能力",
            "对美的敏锐感知",
            "独立思考，不随波逐流"
        ]
    },
    "ESTP": {
        title: "企业家",
        subtitle: "聪明、精力充沛的感知者",
        description: "ESTP型人格是聪明、精力充沛的人，他们总是活在当下。他们喜欢冒险和刺激，享受直接体验生活。ESTP善于观察，能够快速适应变化，是天生的解决问题者。",
        strengths: [
            "出色的观察力和适应能力",
            "精力充沛，享受挑战",
            "实际务实的问题解决能力",
            "善于抓住机会",
            "直接的沟通风格",
            "对生活的热情和享受"
        ]
    },
    "ESFP": {
        title: "娱乐家",
        subtitle: "自发的、精力充沛的表演者",
        description: "ESFP型人格是自发的、精力充沛的表演者，他们总是生活的中心。他们喜欢与人互动，享受聚会的氛围。ESFP热情、友好，总是为周围的人带来欢乐和活力。",
        strengths: [
            "热情友好，善于社交",
            "为他人带来欢乐和活力",
            "适应性强，享受变化",
            "出色的表演和表达能力",
            "活在当下的态度",
            "对美的欣赏和追求"
        ]
    }
};

// 全局变量
let currentQuestion = 0;
let answers = [];
let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};

// 页面切换函数 - Apple风格动画
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    // 添加淡出动画
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            page.style.animation = 'appleFadeOut 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        }
        page.classList.remove('active');
    });

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}
    
    // 延迟显示新页面
    setTimeout(() => {
        const newPage = document.getElementById(pageId);
        newPage.classList.add('active');
        
        // 重置动画类
        newPage.querySelectorAll('.apple-scale-in, .apple-slide-up, .apple-fade-in').forEach((element, index) => {
            element.style.animation = 'none';
            element.offsetHeight; // 触发重排
            element.style.animation = '';
        });

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}
    }, 300);
}

// 添加淡出动画
const style = document.createElement('style');
style.textContent = `
    @keyframes appleFadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

// 开始测试
function startTest() {
    currentQuestion = 0;
    answers = new Array(64).fill(-1);
    scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    showPage('testPage');
    
    // 延迟显示第一题，等待页面动画完成
    setTimeout(() => {
        displayQuestion();
        updateProgress();
    }, 400);
}

// 显示当前题目 - 增加动画效果
function displayQuestion() {
    const question = questions[currentQuestion];
    const questionContainer = document.querySelector('.question-container');
    
    // 添加缩放动画
    questionContainer.style.animation = 'none';
    questionContainer.offsetHeight; // 触发重排
    questionContainer.style.animation = 'appleScaleIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
    
    document.getElementById('questionNumber').textContent = `问题 ${currentQuestion + 1}`;
    document.getElementById('questionText').textContent = question.text;
    document.getElementById('option0Text').textContent = question.options[0];
    document.getElementById('option1Text').textContent = question.options[1];
    
    // 重置选项状态
    document.querySelectorAll('.option-card').forEach((btn, index) => {
        btn.classList.remove('selected');
        btn.style.animation = `appleSlideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
        btn.style.animationDelay = `${index * 0.1}s`;
    });

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}
    
    // 如果之前已经选择过，显示选择状态
    if (answers[currentQuestion] !== -1) {
        document.getElementById(`option${answers[currentQuestion]}`).classList.add('selected');
    }
    
    // 更新按钮状态
    updateNavigationButtons();
}

// 选择选项 - 增加交互效果
function selectOption(optionIndex) {
    answers[currentQuestion] = optionIndex;
    
    // 添加点击效果
    const selectedCard = document.getElementById(`option${optionIndex}`);
    selectedCard.style.transform = 'scale(0.95)';
    setTimeout(() => {
        selectedCard.style.transform = '';
    }, 150);
    
    // 更新选择状态
    document.querySelectorAll('.option-card').forEach(btn => {
        btn.classList.remove('selected');
    });

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}
    document.getElementById(`option${optionIndex}`).classList.add('selected');
    
    // 触发按钮更新动画
    updateNavigationButtons();
}

// 更新导航按钮状态 - 增加动画
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    const prevDisabled = currentQuestion === 0;
    const nextDisabled = answers[currentQuestion] === -1;
    
    // 更新禁用状态
    if (prevDisabled) {
        prevBtn.disabled = true;
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('disabled');
    }
    
    if (nextDisabled) {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled');
    }
    
    // 更新最后一题的按钮文本
    if (currentQuestion === 63) {
        nextBtn.innerHTML = '<span>查看结果</span><i class="fas fa-chart-line"></i>';
    } else {
        nextBtn.innerHTML = '<span>下一题</span><i class="fas fa-arrow-right"></i>';
    }
    
    // 添加状态变化动画
    if (!prevDisabled) {
        prevBtn.style.animation = 'appleSlideUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
    }
    if (!nextDisabled) {
        nextBtn.style.animation = 'appleSlideUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        nextBtn.style.animationDelay = '0.1s';
    }
}

// 上一题 - 平滑过渡
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        
        // 添加过渡动画
        const container = document.querySelector('.question-container');
        container.style.opacity = '0';
        container.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            displayQuestion();
            updateProgress();
            
            // 淡入动画
            container.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            container.style.opacity = '1';
            container.style.transform = 'translateX(0)';
            
            setTimeout(() => {
                container.style.transition = '';
            }, 300);
        }, 200);
    }
}

// 下一题 - 平滑过渡
function nextQuestion() {
    if (answers[currentQuestion] === -1) {
        return; // 必须选择答案才能继续
    }
    
    if (currentQuestion < 63) {
        currentQuestion++;
        
        // 添加过渡动画
        const container = document.querySelector('.question-container');
        container.style.opacity = '0';
        container.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            displayQuestion();
            updateProgress();
            
            // 淡入动画
            container.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            container.style.opacity = '1';
            container.style.transform = 'translateX(0)';
            
            setTimeout(() => {
                container.style.transition = '';
            }, 300);
        }, 200);
    } else {
        calculateResult();
    }
}

// 更新进度 - 增加动画
function updateProgress() {
    const progress = ((currentQuestion + 1) / 64) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    progressFill.style.width = progress + '%';
    progressText.textContent = `${currentQuestion + 1} / 64`;
    
    // 添加进度变化动画
    progressText.style.animation = 'appleScaleIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
}

// 计算结果
function calculateResult() {
    // 重置分数
    scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    // 计算每个维度的分数
    for (let i = 0; i < 64; i++) {
        const question = questions[i];
        const answer = answers[i];
        
        if (question.dimension === 'EI') {
            if (question.value[answer] === 1) {
                scores.E++;
            } else {
                scores.I++;
            }
        } else if (question.dimension === 'SN') {
            if (question.value[answer] === 1) {
                scores.N++;
            } else {
                scores.S++;
            }
        } else if (question.dimension === 'TF') {
            if (question.value[answer] === 1) {
                scores.T++;
            } else {
                scores.F++;
            }
        } else if (question.dimension === 'JP') {
            if (question.value[answer] === 1) {
                scores.J++;
            } else {
                scores.P++;
            }
        }
    }
    
    // 确定人格类型
    const personalityType = 
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.N > scores.S ? 'N' : 'S') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');
    
    displayResult(personalityType);
}

// 显示结果 - Apple风格动画展示
function displayResult(personalityType) {
    showPage('resultPage');
    
    const typeInfo = personalityTypes[personalityType];
    
    // 延迟显示结果，等待页面动画完成
    setTimeout(() => {
        // 基本信息
        document.getElementById('personalityType').textContent = personalityType;
        document.getElementById('personalityTitle').textContent = typeInfo.title;
        document.getElementById('personalitySubtitle').textContent = typeInfo.subtitle;
        document.getElementById('personalityDescription').textContent = typeInfo.description;
        
        // 核心优势
        const strengthsList = document.getElementById('strengths');
        strengthsList.innerHTML = typeInfo.strengths.map((strength, index) => `
            <li class="strength-item" style="animation-delay: ${0.8 + index * 0.1}s">
                <div class="strength-icon"></div>
                <span>${strength}</span>
            </li>
        `).join('');
        
        // 维度分数 - 带动画
        updateDimensionBar('ei', scores.E, scores.I, '外向', '内向');
        updateDimensionBar('sn', scores.S, scores.N, '感觉', '直觉');
        updateDimensionBar('tf', scores.F, scores.T, '情感', '思考');
        updateDimensionBar('jp', scores.P, scores.J, '感知', '判断');
        
        // 重新触发动画
        document.querySelectorAll('.apple-fade-in, .apple-slide-up').forEach(element => {
            element.style.animation = 'none';
            element.offsetHeight; // 触发重排
            element.style.animation = '';
        });

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}
    }, 400);
    
    // 滚动到顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}
}

// 更新维度条 - 增加动画
function updateDimensionBar(dimension, firstScore, secondScore, firstLabel, secondLabel) {
    const total = firstScore + secondScore;
    const firstPercentage = Math.round((firstScore / total) * 100);
    const secondPercentage = Math.round((secondScore / total) * 100);
    
    // 确定主导倾向
    const isSecondDominant = secondScore > firstScore;
    const dominantPercentage = isSecondDominant ? secondPercentage : firstPercentage;
    const dominantLabel = isSecondDominant ? secondLabel : firstLabel;
    const dominantCode = isSecondDominant ? dimension.split('')[1].toUpperCase() : dimension.split('')[0].toUpperCase();
    
    // 延迟更新动画
    setTimeout(() => {
        document.getElementById(`${dimension}-label`).textContent = `${dominantLabel} (${dominantCode})`;
        document.getElementById(`${dimension}-value`).textContent = `${dominantPercentage}%`;
        document.getElementById(`${dimension}-bar`).style.width = `${dominantPercentage}%`;
    }, 600);
}

// 重新测试 - 增加确认对话框动画
function retakeTest() {
    // 创建Apple风格的确认对话框
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: appleFadeIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 32px;
            border-radius: 18px;
            max-width: 400px;
            text-align: center;
            animation: appleScaleIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        ">
            <h3 style="font-size: 21px; font-weight: 600; margin-bottom: 16px;">确定要重新测试吗？</h3>
            <p style="font-size: 17px; color: #86868b; margin-bottom: 24px;">当前的测试结果将会丢失，需要重新完成64道题目。</p>
            <div style="display: flex; gap: 12px; justify-content: center;">
                <button class="apple-button apple-button-secondary" onclick="this.closest('div').parentElement.remove()">
                    <span>取消</span>
                </button>
                <button class="apple-button" onclick="confirmRetake(); this.closest('div').parentElement.remove()">
                    <span>重新测试</span>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// 确认重新测试
function confirmRetake() {
    showPage('welcomePage');
}

// 分享结果 - 增加复制动画反馈
function shareResult() {
    const personalityType = document.getElementById('personalityType').textContent;
    const title = document.getElementById('personalityTitle').textContent;
    
    const shareText = `我刚完成了MBTI人格测试，我的类型是${personalityType} - ${title}！快来测测你是什么性格类型吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: 'MBTI人格测试结果',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('分享失败:', err));
    } else {
        // 复制到剪贴板并显示反馈
        navigator.clipboard.writeText(shareText).then(() => {
            // 创建复制成功提示
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: #1d1d1f;
                color: white;
                padding: 12px 24px;
                border-radius: 12px;
                font-size: 17px;
                z-index: 10000;
                animation: appleSlideUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            `;
            toast.textContent = '测试结果已复制到剪贴板！';
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'appleFadeOut 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }).catch(() => {
            alert('复制失败，请手动复制：\n' + shareText);
        });

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}
    }
}

// 键盘导航支持
document.addEventListener('keydown', function(e) {
    if (document.getElementById('testPage').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            previousQuestion();
        } else if (e.key === 'ArrowRight') {
            nextQuestion();
        } else if (e.key === '1') {
            selectOption(0);
        } else if (e.key === '2') {
            selectOption(1);
        }
    }
    
    // Tab键焦点管理
    if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}

// 初始化 - 添加加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面加载动画
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        document.body.style.opacity = '1';
        showPage('welcomePage');
    }, 100);
    
    // 选项卡片焦点管理
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}
    });

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有元素都已加载
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
    
    // 初始化测试状态
    initializeTest();
});

// 初始化测试
function initializeTest() {
    // 重置所有状态
    currentQuestion = 0;
    answers = [];
    updateProgress();
    showWelcomePage();
}

// 显示欢迎页面
function showWelcomePage() {
    hideAllPages();
    const welcomePage = document.getElementById('welcomePage');
    if (welcomePage) {
        welcomePage.classList.add('active');
    }
}