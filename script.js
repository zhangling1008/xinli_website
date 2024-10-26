// script.js

// 问题列表
const questions = [
  {
    type: 'radio',
    question: '这是大创项目调查问卷测试问题一',
    options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
  },
  {
    type: 'checkbox',
    question: '这是大创项目调查问卷测试问题二',
    options: ['Quality', 'Price', 'Customer Service'],
  },
  {
    type: 'text',
    question: '这是大创项目调查问卷测试问题三',
  },
];

// 动态生成问卷的函数
function generateSurvey(questions) {
  const form = document.getElementById('surveyForm');
  
  questions.forEach(q => {
    const div = document.createElement('div');
    div.classList.add('question');  // 添加类名

    const label = document.createElement('label');
    label.textContent = q.question;  // 设置问题文本
    div.appendChild(label);

    // 处理单选和多选
    if (q.type === 'radio' || q.type === 'checkbox') {
      q.options.forEach(option => {
        const input = document.createElement('input');
        input.type = q.type;  // 设置输入类型
        input.name = q.question;  // 设置 name 以便同一问题下的选项归为一类
        input.value = option;  // 设置选项值
        
        const optionLabel = document.createElement('label');
        optionLabel.textContent = option;  // 设置选项文本

        div.appendChild(input);  // 添加输入框
        div.appendChild(optionLabel);  // 添加标签
        div.appendChild(document.createElement('br'));  // 添加换行
      });
    } else if (q.type === 'text') {
      const textarea = document.createElement('textarea');
      textarea.name = q.question;  // 设置 name
      div.appendChild(textarea);  // 添加文本区域
    }

    form.insertBefore(div, form.lastChild);  // 将问题插入到表单中
  });
}

// 生成问卷
generateSurvey(questions);

// 表单提交处理
document.getElementById('surveyForm').addEventListener('submit', function(event) {
  event.preventDefault();  // 防止页面刷新

  // 获取表单数据
  const formData = new FormData(event.target);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;  // 将表单数据存入对象
  });

  // 输出数据到控制台（实际使用中可发送到服务器）
  console.log(data);
  alert('Survey submitted successfully!');  // 提交成功提示
});
