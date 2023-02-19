import React from 'react';
import styled from 'styled-components';

const data = {
  introduce: {
    title: ['图之典 ——', '可视化图表的词典'],
    tips: '简单易用的图表词典，为你的学习和工作提供科学的可视化建议',
    banner: <img src="/introduce.png" />,
    context: [
      '图之典(Gradict）是由图之可视化工作室（Plothis Studio）制作和维护的数据可视化知识分享站点。本站致力于为数据可视化、数据分析、数据新闻、商业智能等相关领域的朋友提供一个学习可视化专业知识的平台。平台的内容主要涵盖了可视化图表的分类和一些专业概念的介绍。',
      '本站的知识信息是公开、开源的。任何对于本站内容有建议的朋友都可以联系我们，贡献你的知识。'
    ]
  }
};

const instructions = {
  title: '使用说明',
  abstract: '欢迎使用图之典！在这里，您可以寻找图表的定义、用法、案例，获取制作教程、学习资源，还可以加入学习社群，甚至亲身参与网站的完善。为帮助您更好的使用网站功能，我们编写了如下指引：',
  part: [
    {
      name: '首页',
      detail: [
        '首页是图表的集中展示区。您可以自由浏览，选择感兴趣的图表深入了解。也可通过页面上方的筛选器，进行有目的的搜索。目前，一期的图表已经上线，二期的更多图表正在积极筹备中。',
        '筛选器支持4种筛选方式（支持多选）：',
        '1.常用图表。即人们通俗认知下的图表分类，如折线图类、柱状图类、饼图类等。',
        '2.形状。包括圆形、矩形、柱形、三角形等。若您在设计上有特定的偏好或需求，可使用这一功能进行筛选。',
        '3.图类。分为统计图表、示意图、地图和表格。统计图表重在诠释数据的统计结果（如占比、加总、分组等），我们常见的柱状图、饼图、折线图等都属于此类；示意图则常用于表示流程和关系，例如桑基图、力导向图等。',
        '4.功能。分为比较、组成、分布、关系、趋势5大类。您可根据自己的需求，选取对应的功能。'
      ]
    },
    {
      name: '详情页',
      detail: [
        '每个图表都有一个详情页面，对其进行深入讲解，结构包括：',
        '1.图表名称、代表性图片。',
        '2.简介。包含图表的定义及用法的综述。',
        '3.图表属性。包括该图表是否属于常用图表，以及它的形状、图类、功能。',
        '4.图表详解。包括3部分：（1）元素构成。使用具体案例，讲解图表的涵义，以及如何由原始数据一步步推导，最终画出图表。（2）适用场景。即该图表最适合使用的情境。（3）不适用场景。即使用中可能出现的误区，以及一些真实的反面案例。',
        '5.相似图表。考虑到潜在的不同需求，我们将相似图表细分为了：（1）仅外形相似（但功能不相似）（2）仅功能相似（但外形不相似）（3）外形功能都相似。这一功能的目的，一方面是帮助您寻找某一图表的“替代者”，为可视化提供更多选择；另一方面，则有助于避免图表的误用，比如将两个仅外形相似的图表当作功能相同来使用。',
        '6.设计案例。这一部分汇集了我们精心挑选的设计案例，整体侧重于设计和美观性和创意性。在选取案例时，我们尽量兼顾了案例的多样性，并配以了简短的文字介绍，以便您快速了解该案例的出彩之处，如排版、用色上的巧思，如何做变形处理，以及采用视频、交互、布展等多种媒介形式等等。您可点击图片，查看大图。也可以点击按钮，访问原作品网页。',
        '7.使用场景。从真实的场景、需求出发，讲解该图表实际的应用情境，囊括了企业、金融、体育、环境、新闻等诸多领域，期望对您有所启发。您也可以点击文字后的链接，访问原作品网页，或者阅读更多。',
        '8.制作教程。我们将工具分为了BI工具、代码库、设计软件3大类，并选取了每一类型中使用较为广泛的工具，搜寻相关教程。我们尽量寻找了那些深入浅出、相对权威、发布较新的文章和视频，但难免单薄或有所遗漏。如果您有更好的教程推荐，我们将非常欢迎您参与到贡献中！',
        '9.专项工具。指能够专门制作该图表的工具，或者方便易用、值得推荐的工具。',
        '10.学习资源。即值得延伸阅读的文章。',
        '11.参考文献。该页出现过的所有引用。',
        '12.贡献者。对该页有所贡献的人员，鼠标移动上去可查看贡献内容。'
      ]
    },
    {
      name: '本站介绍',
      detail: ['包含对图之典网站的简单介绍。此外，您还可以在这里查看版本日志。']
    },
    {
      name: '关于我们',
      detail: ['包含团队介绍及联系方式。您还可以在这里认识所有的项目组成员，并访问他们的社交平台或个人主页。']
    },
    {
      name: '反馈',
      detail: [
        '在网站的所有页面，您都可以看到反馈按钮。您可以在这里向我们提出意见（例如页面中的错误，您发现的好案例、好文章）、建议（例如希望我们优先更新哪些图表），或者表达合作意向。我们会及时处理您的反馈，并以邮件的方式回复您。一旦贡献被采纳，您的昵称及贡献内容，将出现在相应页面的“贡献者”区域。',
        '此外，您还可以通过语雀及微信公众号（链接位于页脚处）联系到我们、参与讨论或提出问题。'
      ]
    }
  ]
};
const IntroduceLayout = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    padding: 0 40px;
  }
`;

const IntroWapper = styled.div`
  h1 {
    font-weight: normal;
    font-size: 36px;
    line-height: 36px;
  }
  .tips {
    font-size: 14px;
  }
  img {
    width: 100%;
    max-width: inherit;
    margin-top: 40px;
  }
  p.ctx {
    margin-bottom: 20px;
    line-height: 30px;
  }
`;

function getDate(dateStr: string) {
  const dateArr = dateStr.substring(0, 10).split('-');
  return dateArr[0] + '年' + dateArr[1] + '月' + dateArr[2] + '日';
}

// TODO: 显示距今时间
// function getDiffDate(date) {
//   const historyDate = new Date(date).getTime();
//   const currentDate = new Date().getTime();
//   const total = (currentDate - historyDate)/1000;
//   console.log('total: ', total);
//   var day = parseInt(total / (24*60*60));//计算整数天数
//   console.log('day: ', day);
// }

// getDiffDate('2019-01-01');

// TODO: 超过条数显示“更多”
class Introduce extends React.Component {
  state = {
    logsData: []
  };
  componentDidMount() {
    // fetch({
    //   type: 'GET',
    //   url: logs
    // }).then((resp) => {
    //   if (resp.code === 0 && resp.status === 'ok') {
    //     this.setState({ logsData: resp.data || [] });
    //   }
    // });
  }
  render() {
    return (
        <IntroduceLayout>
        <IntroWapper>
          {data.introduce.title.map((title, index) => (
            <h1 key={index}>{title}</h1>
          ))}
          <p className="tips">{data.introduce.tips}</p>
          {data.introduce.banner}
          {data.introduce.context.map((ctx, index) => (
            <p key={index} className="ctx">
              {ctx}
            </p>
          ))}
        </IntroWapper>
        <div className="long-text-container">
          <h2 className="block-title">{instructions.title}</h2>
          <p>{instructions.abstract}</p>
          {instructions.part.map((item, index) => (
            <div key={index} className="section">
              <h3>{item.name}</h3>
              {item.detail.map((i, idx) => (
                <p key={idx}>{i}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="version-container">
          <h2 className="block-title">版本日志</h2>
          {/* {this.state.logsData.map((block, idx) => (
            <div className="log-box" key={idx}>
              <p>{getDate(block.date)}</p>
              <ul className="log">
                {block.logs.map((log, index) => (
                  <li key={index}>
                    - {log.type}: {log.description}
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </IntroduceLayout>
    );
  }
}

export default Introduce;