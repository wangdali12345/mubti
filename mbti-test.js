// MBTI测试核心逻辑 - 苹果风格版本
let currentQuestion = 0;
let userAnswers = [];
let scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
};

// 开始测试
function startTest() {
    const welcomeSection = document.getElementById('welcomeSection');
    const testSection = document.getElementById('testSection');
    
    // 页面切换动画
    welcomeSection.style.opacity = '0';
    welcomeSection.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        welcomeSection.style.display = 'none';
        testSection.style.display = 'block';
        
        setTimeout(() => {
            testSection.style.opacity = '1';
            testSection.style.transform = 'translateY(0)';
        }, 50);
        
        currentQuestion = 0;
        userAnswers = [];
        resetScores();
        showQuestion();
    }, 300);
}

// 重置分数
function resetScores() {
    scores = {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0
    };
}

// 显示当前问题
function showQuestion() {
    const question = mbtiQuestions[currentQuestion];
    const questionNumber = document.getElementById('questionNumber');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    
    // 更新问题编号和文本
    questionNumber.textContent = `问题 ${currentQuestion + 1}`;
    questionText.textContent = question.question;
    
    // 清空选项容器
    optionsContainer.innerHTML = '';
    
    // 创建选项
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <div class="option-text">${option.text}</div>
        `;
        
        // 添加点击事件
        optionDiv.addEventListener('click', function() {
            selectOption(index, option.value);
        });
        
        // 添加动画延迟
        optionDiv.style.opacity = '0';
        optionDiv.style.transform = 'translateY(20px)';
        optionsContainer.appendChild(optionDiv);
        
        setTimeout(() => {
            optionDiv.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            optionDiv.style.opacity = '1';
            optionDiv.style.transform = 'translateY(0)';
        }, 100 + index * 50);
    });
    
    // 恢复之前的答案
    if (userAnswers[currentQuestion]) {
        const savedValue = userAnswers[currentQuestion];
        const optionIndex = question.options.findIndex(opt => opt.value === savedValue);
        if (optionIndex !== -1) {
            setTimeout(() => {
                selectOption(optionIndex, savedValue);
            }, 300);
        }
    }
    
    updateProgress();
    updateNavigationButtons();
}

// 选择选项
function selectOption(index, value) {
    // 移除所有选中状态
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // 添加选中状态
    const selectedOption = options[index];
    selectedOption.classList.add('selected');
    
    // 添加选中动画效果
    selectedOption.style.transform = 'scale(0.98)';
    setTimeout(() => {
        selectedOption.style.transform = 'scale(1)';
    }, 100);
    
    // 保存答案
    userAnswers[currentQuestion] = value;
    
    // 更新分数
    updateScores();
    
    // 更新导航按钮状态
    updateNavigationButtons();
}

// 更新分数
function updateScores() {
    // 重置分数
    resetScores();
    
    // 重新计算分数
    userAnswers.forEach(answer => {
        if (answer) {
            scores[answer]++;
        }
    });
}

// 更新进度条
function updateProgress() {
    const progress = ((currentQuestion + 1) / mbtiQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // 更新进度文本
    document.getElementById('currentQuestion').textContent = `第 ${currentQuestion + 1} 题`;
    document.getElementById('totalQuestions').textContent = `共 ${mbtiQuestions.length} 题`;
}

// 更新导航按钮
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // 上一题按钮
    prevBtn.disabled = currentQuestion === 0;
    
    // 下一题按钮
    if (currentQuestion === mbtiQuestions.length - 1) {
        nextBtn.textContent = '查看结果';
        nextBtn.disabled = !userAnswers[currentQuestion];
    } else {
        nextBtn.textContent = '下一题';
        nextBtn.disabled = !userAnswers[currentQuestion];
    }
}

// 上一题
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// 下一题
function nextQuestion() {
    if (currentQuestion < mbtiQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        // 显示结果
        showResult();
    }
}

// 计算MBTI类型
function calculateMBTI() {
    // 计算每个维度的结果
    const dimensions = {
        EI: scores.E >= scores.I ? 'E' : 'I',
        SN: scores.S >= scores.N ? 'S' : 'N',
        TF: scores.T >= scores.F ? 'T' : 'F',
        JP: scores.J >= scores.P ? 'J' : 'P'
    };
    
    return dimensions.EI + dimensions.SN + dimensions.TF + dimensions.JP;
}

// 显示结果
function showResult() {
    const mbtiType = calculateMBTI();
    const typeInfo = mbtiTypes[mbtiType];
    
    if (!typeInfo) {
        console.error('未找到MBTI类型信息:', mbtiType);
        return;
    }
    
    const testSection = document.getElementById('testSection');
    const resultSection = document.getElementById('resultSection');
    
    // 页面切换动画
    testSection.style.opacity = '0';
    testSection.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        testSection.style.display = 'none';
        resultSection.style.display = 'block';
        
        // 填充结果信息
        document.getElementById('personalityType').textContent = mbtiType;
        document.getElementById('personalityName').textContent = typeInfo.name;
        document.getElementById('personalityDescription').textContent = typeInfo.description;
        
        // 显示特质卡片
        const traitsContainer = document.getElementById('traitsContainer');
        traitsContainer.innerHTML = '';
        
        typeInfo.traits.forEach((trait, index) => {
            const traitCard = document.createElement('div');
            traitCard.className = 'trait-card';
            traitCard.innerHTML = `
                <div class="trait-label">${trait.title}</div>
                <div class="trait-value">${trait.value}</div>
            `;
            
            // 添加动画
            traitCard.style.opacity = '0';
            traitCard.style.transform = 'translateY(20px)';
            traitsContainer.appendChild(traitCard);
            
            setTimeout(() => {
                traitCard.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                traitCard.style.opacity = '1';
                traitCard.style.transform = 'translateY(0)';
            }, 200 + index * 100);
        });
        
        // 添加详细信息
        const resultDetails = document.getElementById('resultDetails');
        resultDetails.innerHTML = `
            <div class="detail-section">
                <h3 class="detail-title">优势特点</h3>
                <p class="detail-content">${typeInfo.strengths.join(' · ')}</p>
            </div>
            <div class="detail-section">
                <h3 class="detail-title">发展建议</h3>
                <p class="detail-content">${typeInfo.weaknesses.join(' · ')}</p>
            </div>
            <div class="detail-section">
                <h3 class="detail-title">适合职业</h3>
                <p class="detail-content">${typeInfo.careers.join(' · ')}</p>
            </div>
        `;
        
        // 显示人群占比
        document.getElementById('percentageInfo').textContent = `约 ${typeInfo.percentage} 的人群属于此类型`;
        
        setTimeout(() => {
            resultSection.style.opacity = '1';
            resultSection.style.transform = 'translateY(0)';
            resultSection.classList.add('fade-in');
        }, 50);
    }, 300);
}

// 重新测试
function restartTest() {
    const resultSection = document.getElementById('resultSection');
    const welcomeSection = document.getElementById('welcomeSection');
    
    // 页面切换动画
    resultSection.style.opacity = '0';
    resultSection.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultSection.style.display = 'none';
        welcomeSection.style.display = 'block';
        welcomeSection.classList.add('fade-in');
        
        // 重置数据
        currentQuestion = 0;
        userAnswers = [];
        resetScores();
        
        // 重置进度条
        document.getElementById('progressBar').style.width = '0%';
    }, 300);
}

// 键盘支持
document.addEventListener('keydown', function(event) {
    if (document.getElementById('testSection').style.display === 'block') {
        if (event.key >= '1' && event.key <= '2') {
            const index = parseInt(event.key) - 1;
            const question = mbtiQuestions[currentQuestion];
            if (index < question.options.length) {
                selectOption(index, question.options[index].value);
            }
        } else if (event.key === 'ArrowLeft' && currentQuestion > 0) {
            previousQuestion();
        } else if (event.key === 'ArrowRight' && userAnswers[currentQuestion]) {
            nextQuestion();
        }
    }
});

// 添加触摸支持（移动设备）
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    if (document.getElementById('testSection').style.display === 'block') {
        touchStartX = event.changedTouches[0].screenX;
    }
});

document.addEventListener('touchend', function(event) {
    if (document.getElementById('testSection').style.display === 'block') {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    }
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentQuestion < mbtiQuestions.length - 1 && userAnswers[currentQuestion]) {
            // 向左滑动，下一题
            nextQuestion();
        } else if (diff < 0 && currentQuestion > 0) {
            // 向右滑动，上一题
            previousQuestion();
        }
    }
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置初始状态
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'none';
    
    // 添加过渡样式
    [document.getElementById('welcomeSection'), document.getElementById('testSection'), document.getElementById('resultSection')].forEach(section => {
        section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 页面切换时的滚动处理
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}