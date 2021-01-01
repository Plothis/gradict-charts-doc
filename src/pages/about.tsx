import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const AboutContent = styled.div`
  max-width: 1140px;
  box-sizing: border-box;
  @media screen and (max-width: 1344px) {
    max-width: 946px;
  }
  @media screen and (max-width: 1088px) {
    max-width: 752px;
  }
  @media screen and (max-width: 832px) {
    width: 566px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  margin: 0 auto;
  color: #4a4a4a;
  transform: translateY(-17vw);
`;

const Introduction = styled.div`
  margin: 40px 0;
  box-shadow: 0px -10px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  padding: 8vw 9vw;
  .block {
    &:first-child {
      margin-bottom: 60px;
    }
    /* h3 {
      font-size: 16px;
      font-weight: normal;
    } */
    p {
      font-size: 14px;
      line-height: 30px;
    }
    .icon {
      margin-right: 16px;
      cursor: pointer;
      color: #4a4a4a;
    }
  }
`;

const GridCard = styled.div`
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    border: solid 1px #d0d0d0;
    box-shadow: none;
  }
  img {
    width: 100%;
  }
  .information {
    box-sizing: border-box;
    background: #fff;
    position: relative;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
    p {
      margin: 0;
    }
    .name {
      font-size: 14px;
      font-weight: bold;
      color: #4a4a4a;
    }
    .title {
      font-size: 12px;
      color: #9b9b9b;
      margin: 6px 0;
    }
    .social {
      height: 18px;
      span {
        overflow: hidden;
        margin: 0 auto;
        a {
          color: #9b9b9b;
          &:not(:last-child) {
            margin-right: 10px;
          }
          img {
            width: auto;
            height: 20px;
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles({
  lightTooltip: {
    backgroundColor: '#fff',
    color: '#4a4a4a',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    padding: '10px',
    textAlign: 'center'
  },
  arrowPopper: {
    backgroundColor: '#fff',
    color: '#4a4a4a',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    padding: '10px',
    textAlign: 'center'
  },
  // arrowGenerator('#000'),
  arrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid'
    }
  }
});

const data = {
  introduction: {
    title: '关于我们',
    detail:
      '图之典是由一群对数据可视化充满热情的人共同建立起来的。我们来自五湖四海，来自各大公司，为了共同的爱好和使命，利用工作之余的时间攒起了这个网站。在这个数据时代，我们希望在数据和人之间搭起一座桥梁——数据可视化。帮助大家更好的了解可视化、使用可视化工具，这是我们简单的初衷。图之典的首创者们，都来自图之可视化工作室。其实，与其说是工作室，不如说是一个由爱好组成的兴趣小组。我们一起探讨、一起创作、一起成长。当然，图之典的发展和充实也需要更多力量的加入，我们也非常期待你可以为这个站点添砖加瓦。'
  },
  contactUs: {
    title: '联系我们',
    detail: ['电子邮箱：gradict@163.com',
      // '商务合作：gradict_market@163.com'
    ],
    icon: [
      {
        name: 'yuque',
        link: 'https://www.yuque.com/gradict/intro/zv7367'
      },
      // {
      //   name: 'github',
      //   link: 'https://github.com/Plothis/gradict-doc'
      // },
      {
        name: 'wechat',
        link: '',
        QRcode: '/QR-code/Plothis.jpeg'
      }
    ]
  },
  contributors: [
    {
      name: 'Allen',
      title: '后端工程师',
      avatar: '/member/Allen-后端.png',
      social: [{ name: 'github', link: 'https://github.com/hb-bobo' }]
    },
    {
      name: 'Amphetamine',
      title: '设计师',
      avatar: '/member/Amphetamine-设计师.png',
      social: []
    },
    {
      name: 'Mia',
      title: '团队经理人',
      avatar: '/member/Chan-团队经理人.png',
      social: []
    },
    {
      name: 'Gaia',
      title: '设计师',
      avatar: '/member/Gaia-设计师.png',
      social: [{ name: 'zcool', link: 'https://www.zcool.com.cn/u/15757199' }]
    },
    {
      name: 'Neo',
      title: '总顾问',
      avatar: '/member/Neo-总顾问.png',
      social: [
        { name: 'yuque', link: 'https://www.yuque.com/neowang' },
        { name: 'github', link: 'https://github.com/neoddish' },
        { name: 'weibo', link: 'https://weibo.com/neopard/profile?rightmod=1&wvr=6&mod=personinfo' }
      ]
    },
    {
      name: 'Olivia',
      title: '项目经理',
      avatar: '/member/Olivia-项目经理.png',
      social: [{ name: 'github', link: 'https://olivialan.github.io/' }, { name: 'wechat', link: '', QRcode: '/social-icons/qubawoguajing.jpg' }]
    },
    {
      name: '涂大宝',
      title: '顾问',
      avatar: '/member/涂大宝-顾问.png',
      social: []
    },
    {
      name: 'xi',
      title: '前端可视化工程师',
      avatar: '/member/xi-前端可视化工程师.png',
      social: [{ name: 'yuque', link: 'https://www.yuque.com/u68039' }, { name: 'github', link: 'https://www.yuque.com/u68039' }]
    },
    {
      name: '小虾',
      title: '设计师',
      avatar: '/member/小虾-设计师.png',
      social: [{ name: 'personalweb', link: 'http://www.xiauxx.site/' }]
    },
    {
      name: '徐堃',
      title: '设计师',
      avatar: '/member/徐堃-设计师.png',
      social: [{ name: 'wechat', link: '', QRcode: '/social-icons/QR-xukun.png' }, { name: 'zcool', link: 'https://www.zcool.com.cn/u/13265546' }]
    },
    {
      name: '鱼头',
      title: '前端工程师',
      avatar: '/member/鱼头-前端工程师.png',
      social: [{ name: 'github', link: 'https://github.com/ymyqwe' }, { name: 'blog', link: ' https://yumingyuan.me/' }]
    },
    {
      name: '子龙',
      title: '前端可视化工程师',
      avatar: '/member/子龙-前端可视化工程师.png',
      social: [{ name: 'github', link: 'https://github.com/mark0322' }, { name: 'jianshu', link: ' https://www.jianshu.com/u/ebd19f11aab9' }]
    }
  ]
};

const About = () => {
  const classes = useStyles();
  return (
    <>
      <img src="/about-bg.png" style={{ width: '100%', maxWidth: 'inherit' }} />
      <AboutContent>
        <Introduction>
          <div className="block">
            <h3>{data.introduction.title}</h3>
            <p>{data.introduction.detail}</p>
          </div>
          <div className="block">
            <h3>{data.contactUs.title}</h3>
            {data.contactUs.detail.map((contact) => (
              <p key={contact}>{contact}</p>
            ))}
            <p>
              {data.contactUs.icon.map((icon) =>
                // <span className={`icon font_family icon-${icon}`} key={icon} />
                icon.name === 'wechat' ? (
                  <Tooltip
                    classes={{ tooltip: classes.lightTooltip }}
                    // placement="bottom-end"
                    title={
                      <>
                        <img src={icon.QRcode} alt={icon.name} height="130" />
                        <p>微信扫一扫关注我</p>
                      </>
                    }
                    key={icon.name}
                  >
                    <a href="#!" target="view_window" className="icon">
                      <span className={`font_family icon-${icon.name}`} />
                    </a>
                  </Tooltip>
                ) : (
                    <a href={icon.link} target="view_window" key={icon.name} className="icon">
                      <span className={`font_family icon-${icon.name}`} />
                    </a>
                  )
              )}
            </p>
          </div>
        </Introduction>
        <div className="contributor-container">
          {data.contributors.map((member) => (
            <div className="contributor-detail" key={member.name}>
              <GridCard>
                <img src={member.avatar} alt={member.name} />
                <div className="information">
                  <p className="name">{member.name}</p>
                  <p className="title">{member.title}</p>
                  <p className="social">
                    <span>
                      {member.social.map((icon) => {
                        return icon.name === 'wechat' ? (
                          <Tooltip
                            classes={{ tooltip: classes.lightTooltip }}
                            title={
                              <>
                                <img src={icon.QRcode} alt={icon.name} height="130" />
                                <p>微信扫一扫关注我</p>
                              </>
                            }
                            key={icon.name}
                          >
                            <a href="#!" target="view_window">
                              {/* <span className={`font_family icon-${icon.name}`}></span> */}
                              <img src={`/social-icons/${icon.name}.png`} alt={icon.name} />
                            </a>
                          </Tooltip>
                        ) : (
                            <a href={icon.link} target="view_window" key={icon.name}>
                              <img src={`/social-icons/${icon.name}.png`} alt={icon.name} />
                            </a>
                          );
                      })}
                    </span>
                  </p>
                </div>
              </GridCard>
            </div>
          ))}
        </div>
      </AboutContent>
    </>
  );
}

export default About;
