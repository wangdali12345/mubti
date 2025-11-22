// MBTI测试题目数据库
const mbtiQuestions = [
    // E/I 维度题目
    {
        id: 1,
        dimension: 'EI',
        question: '在社交场合中，你通常：',
        options: [
            { text: '很容易与陌生人交谈，活跃参与对话', value: 'E' },
            { text: '更愿意观察和倾听，慢慢融入', value: 'I' }
        ]
    },
    {
        id: 2,
        dimension: 'EI',
        question: '周末放松时，你更喜欢：',
        options: [
            { text: '和朋友聚会或参加社交活动', value: 'E' },
            { text: '独自阅读、思考或享受安静时光', value: 'I' }
        ]
    },
    {
        id: 3,
        dimension: 'EI',
        question: '在团队工作中，你倾向于：',
        options: [
            { text: '主动分享想法，组织讨论', value: 'E' },
            { text: '先独立思考，然后提出见解', value: 'I' }
        ]
    },
    {
        id: 4,
        dimension: 'EI',
        question: '当你感到压力时，通常：',
        options: [
            { text: '找人倾诉，通过交流缓解压力', value: 'E' },
            { text: '独处思考，内心消化情绪', value: 'I' }
        ]
    },
    {
        id: 5,
        dimension: 'EI',
        question: '在新的环境中，你：',
        options: [
            { text: '快速适应，主动与他人互动', value: 'E' },
            { text: '需要时间观察，逐步建立联系', value: 'I' }
        ]
    },
    // S/N 维度题目
    {
        id: 6,
        dimension: 'SN',
        question: '学习新知识时，你更注重：',
        options: [
            { text: '具体的事实、数据和实际应用', value: 'S' },
            { text: '理论框架、可能性和深层含义', value: 'N' }
        ]
    },
    {
        id: 7,
        dimension: 'SN',
        question: '在工作中，你更擅长：',
        options: [
            { text: '按部就班，注重细节和精确性', value: 'S' },
            { text: '创新思维，发现新的可能性', value: 'N' }
        ]
    },
    {
        id: 8,
        dimension: 'SN',
        question: '面对问题，你倾向于：',
        options: [
            { text: '关注具体事实，寻找实际解决方案', value: 'S' },
            { text: '分析根本原因，探索系统性的解决方案', value: 'N' }
        ]
    },
    {
        id: 9,
        dimension: 'SN',
        question: '你更喜欢：',
        options: [
            { text: '基于过去的经验做决定', value: 'S' },
            { text: '基于未来的可能性做决定', value: 'N' }
        ]
    },
    {
        id: 10,
        dimension: 'SN',
        question: '在对话中，你更关注：',
        options: [
            { text: '具体的细节和实际情况', value: 'S' },
            { text: '潜在的含义和未来影响', value: 'N' }
        ]
    },
    // T/F 维度题目
    {
        id: 11,
        dimension: 'TF',
        question: '做决定时，你主要依据：',
        options: [
            { text: '逻辑分析和客观事实', value: 'T' },
            { text: '价值观和人际感受', value: 'F' }
        ]
    },
    {
        id: 12,
        dimension: 'TF',
        question: '评价他人时，你更看重：',
        options: [
            { text: '能力和业绩表现', value: 'T' },
            { text: '品格和动机意图', value: 'F' }
        ]
    },
    {
        id: 13,
        dimension: 'TF',
        question: '在冲突中，你倾向于：',
        options: [
            { text: '分析问题，找出最合理的解决方案', value: 'T' },
            { text: '关注各方的感受，寻求和谐', value: 'F' }
        ]
    },
    {
        id: 14,
        dimension: 'TF',
        question: '给予反馈时，你更：',
        options: [
            { text: '直接指出问题和改进建议', value: 'T' },
            { text: '考虑对方的感受，温和表达', value: 'F' }
        ]
    },
    {
        id: 15,
        dimension: 'TF',
        question: '在团队中，你更：',
        options: [
            { text: '注重效率和专业水准', value: 'T' },
            { text: '关心团队和谐和个人成长', value: 'F' }
        ]
    },
    // J/P 维度题目
    {
        id: 16,
        dimension: 'JP',
        question: '面对计划，你更喜欢：',
        options: [
            { text: '制定详细计划并严格执行', value: 'J' },
            { text: '保持灵活性，随时调整计划', value: 'P' }
        ]
    },
    {
        id: 17,
        dimension: 'JP',
        question: '在截止日期前，你通常：',
        options: [
            { text: '提前完成，留有缓冲时间', value: 'J' },
            { text: '在压力下完成，享受最后冲刺', value: 'P' }
        ]
    },
    {
        id: 18,
        dimension: 'JP',
        question: '你的工作风格更像是：',
        options: [
            { text: '有条不紊，完成一件再做下一件', value: 'J' },
            { text: '多任务并行，灵活切换', value: 'P' }
        ]
    },
    {
        id: 19,
        dimension: 'JP',
        question: '面对变化，你：',
        options: [
            { text: '希望提前知道并做好准备', value: 'J' },
            { text: '享受意外的机会和挑战', value: 'P' }
        ]
    },
    {
        id: 20,
        dimension: 'JP',
        question: '整理环境时，你倾向于：',
        options: [
            { text: '保持整洁有序，物品有固定位置', value: 'J' },
            { text: '创造性地安排，适度的整洁即可', value: 'P' }
        ]
    },
    // 更多题目确保每个维度有足够的题目
    {
        id: 21,
        dimension: 'EI',
        question: '在派对上，你通常：',
        options: [
            { text: '主动与不同的人交谈，享受热闹氛围', value: 'E' },
            { text: '与几个熟悉的朋友深入交谈', value: 'I' }
        ]
    },
    {
        id: 22,
        dimension: 'EI',
        question: '工作充电的方式是：',
        options: [
            { text: '与同事讨论，获得新观点', value: 'E' },
            { text: '独立研究，深入思考问题', value: 'I' }
        ]
    },
    {
        id: 23,
        dimension: 'SN',
        question: '你对艺术的欣赏更注重：',
        options: [
            { text: '技巧、色彩和具体表现形式', value: 'S' },
            { text: '深层含义、象征和情感表达', value: 'N' }
        ]
    },
    {
        id: 24,
        dimension: 'SN',
        question: '阅读时，你更喜欢：',
        options: [
            { text: '纪实作品、实用指南', value: 'S' },
            { text: '哲学思考、科幻小说', value: 'N' }
        ]
    },
    {
        id: 25,
        dimension: 'TF',
        question: '作为领导者，你更：',
        options: [
            { text: '注重目标达成和效率', value: 'T' },
            { text: '关心团队成员的感受和发展', value: 'F' }
        ]
    },
    {
        id: 26,
        dimension: 'TF',
        question: '面对道德困境，你：',
        options: [
            { text: '分析利弊，选择最理性的方案', value: 'T' },
            { text: '遵循内心价值观，选择感觉正确的方案', value: 'F' }
        ]
    },
    {
        id: 27,
        dimension: 'JP',
        question: '购物时，你倾向于：',
        options: [
            { text: '列出清单，按计划购买', value: 'J' },
            { text: '随性而为，发现喜欢的就买', value: 'P' }
        ]
    },
    {
        id: 28,
        dimension: 'JP',
        question: '旅行时，你更喜欢：',
        options: [
            { text: '制定详细行程，提前预订', value: 'J' },
            { text: '大致规划，保留探索空间', value: 'P' }
        ]
    },
    {
        id: 29,
        dimension: 'EI',
        question: '在会议上，你通常：',
        options: [
            { text: '积极发言，分享观点', value: 'E' },
            { text: '仔细聆听，深思熟虑后发言', value: 'I' }
        ]
    },
    {
        id: 30,
        dimension: 'SN',
        question: '解决技术问题时，你更：',
        options: [
            { text: '查找具体解决方案，按步骤操作', value: 'S' },
            { text: '理解系统原理，创新解决方法', value: 'N' }
        ]
    },
    {
        id: 31,
        dimension: 'TF',
        question: '在人际关系中，你更重视：',
        options: [
            { text: '诚实和直接沟通', value: 'T' },
            { text: '和谐和情感共鸣', value: 'F' }
        ]
    },
    {
        id: 32,
        dimension: 'JP',
        question: '面对选择时，你：',
        options: [
            { text: '快速决定并承担责任', value: 'J' },
            { text: '收集更多信息，保持开放', value: 'P' }
        ]
    },
    {
        id: 33,
        dimension: 'EI',
        question: '在团队合作中，你更像是：',
        options: [
            { text: '协调者，促进团队互动', value: 'E' },
            { text: '思考者，贡献深度见解', value: 'I' }
        ]
    },
    {
        id: 34,
        dimension: 'SN',
        question: '你对未来的态度是：',
        options: [
            { text: '基于当前趋势，做现实规划', value: 'S' },
            { text: '想象各种可能性，追求理想未来', value: 'N' }
        ]
    },
    {
        id: 35,
        dimension: 'TF',
        question: '批评他人时，你更注重：',
        options: [
            { text: '问题本身和改进方法', value: 'T' },
            { text: '对方的感受和建设性方式', value: 'F' }
        ]
    },
    {
        id: 36,
        dimension: 'JP',
        question: '生活态度上，你更喜欢：',
        options: [
            { text: '有组织、有规律的生活', value: 'J' },
            { text: '自由、灵活的生活方式', value: 'P' }
        ]
    },
    {
        id: 37,
        dimension: 'EI',
        question: '在人群中，你通常感到：',
        options: [
            { text: '充满活力，获得能量', value: 'E' },
            { text: '消耗精力，需要独处恢复', value: 'I' }
        ]
    },
    {
        id: 38,
        dimension: 'SN',
        question: '学习新技能时，你更：',
        options: [
            { text: '通过实践和模仿来掌握', value: 'S' },
            { text: '通过理解和创新来掌握', value: 'N' }
        ]
    },
    {
        id: 39,
        dimension: 'TF',
        question: '在争议中，你更关注：',
        options: [
            { text: '事实真相和逻辑正确性', value: 'T' },
            { text: '各方感受和关系维护', value: 'F' }
        ]
    },
    {
        id: 40,
        dimension: 'JP',
        question: '完成任务的方式是：',
        options: [
            { text: '设定明确目标，逐步实现', value: 'J' },
            { text: '探索多种可能，选择最佳路径', value: 'P' }
        ]
    }
];