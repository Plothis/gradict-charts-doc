import React, { Component, Fragment } from 'react';

import Close from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import '../style/upload.less';

interface Props {
  classes: Record<string, any>;
  graphId?: string;
  toggleFeedback: () => void;
}
interface State{
}
const FeedBackContext = styled.div`
  padding: 24px 0;
  font-size: 12px;
  color: #9b9b9b;
  position: relative;
  .close {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
  h3 {
    color: #343e73;
    font-size: 20px;
    text-align: center;
  }
  p {
    text-align: center;
    a.icon {
      color: #4a4a4a;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
  .input-area {
    overflow: scroll;
    margin-bottom: 16px;
    border-top: solid 1px #e6e6e6;
    border-bottom: solid 1px #e6e6e6;
    padding: 24px;
  }
  .input-box {
    margin-bottom: 16px;
    label {
      color: #4a4a4a;
    }
    .desc {
      margin-left: 10px;
      float: right;
    }
    .type {
      width: 66px;
      height: 24px;
      line-height: 24px;
      border-radius: 2px;
      display: inline-block;
      margin-right: 14px;
      text-align: center;
      margin-bottom: 10px;
      font-size: 12px;
      position: relative;
      &.active {
        color: #fff;
        background-color: #343e73;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0px;
          height: 0px;
          border: 5px solid transparent;
          border-right: 5px solid #343e73;
          border-bottom: 5px solid #343e73;
          transform: translate(-50%, 50%) rotate(45deg);
        }
      }
    }
    input,
    textarea {
      width: 100%;
      padding: 5px;
      box-sizing: border-box;
      border: 1px solid #d0d0d0;
    }
    textarea {
      height: 150px;
      resize: none;
    }
    button {
      background: #343e73;
      color: #fff;
      padding: 9px 0;
      text-align: center;
      width: 100%;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;
const Result = styled.div`
  box-sizing: border-box;
  text-align: center;
  position: relative;
  /* overflow: hidden; */
  div {
    width: 160px;
    /* margin: 0 auto; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100px;
      margin-bottom: 36px;
    }
    p {
      color: #4a4a4a;
      font-size: 12px;
    }
    button {
      margin-top: 32px;
      background-color: #343e73;
      border-radius: 2px;
      width: 100%;
      padding: 9px 0;
      color: #ffffff;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;

const successMsg = {
  img: '../static/feedback/success-feedback.png',
  tips: '提交成功！非常感谢您的反馈',
  button: '确定'
};
const failMsg = {
  img: '../static/feedback/fail-feedback.png',
  tips: '提交失败！请重新尝试',
  button: '重试'
};

const contact = [
  {
    name: 'github',
    link: 'https://github.com/Plothis/gradict-charts-doc'
  },
  {
    name: 'yuque',
    link: 'https://www.yuque.com/gradict/intro/zv7367'
  },
  {
    name: 'wechat',
    link: '#!',
    QRcode: '/QR-code/Plothis.jpeg'
  }
];
const styles = () => ({
  lightTooltip: {
    backgroundColor: '#fff',
    color: '#4a4a4a',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    padding: '10px',
    textAlign: 'center'
  }
});
const editorHost = window.location.host.includes("tuzhidian.8and1.cn") ? 'mdx-editor.8and1.cn:3000' : 'mdx-editor.8and1.cn'
class FeedBackTable extends Component<Props, State> {
  initialState: State = {
  };
  state = this.initialState;


  componentDidMount() {
    this.setState({ windowHeight: window && window.innerHeight });
  }

  editCurrentPage = () => {
    window.open(`http://${editorHost}/?file-path=${encodeURIComponent(window.location.pathname)}`, '_blank')
  }
  submitNewChart = () => {
    window.open(`http://${editorHost}/?action=new`, '_blank')
  }
  render() {
    const { toggleFeedback, classes } = this.props;
    const inChartPage = window.location.pathname.includes('/charts')
    return (
      <div>
          <FeedBackContext>
           
            <div style={{ padding: '0 24px' }}>
              <span className="close" onClick={toggleFeedback}>
                <Close />
              </span>
              <h3>内容反馈</h3>

              <div className="input-box" style={{ padding: '0 24px' }}>
                <button onClick={this.editCurrentPage} disabled={!inChartPage} style={inChartPage ? { background: '#343e73' } : { background: '#d0d0d0' }}>
                  编辑当前页
                </button>
      
              </div>
              <div className="input-box" style={{ padding: '0 24px' }}>
                <button onClick={this.submitNewChart} >
                  提交新图表
                </button>
              </div>
              <p>您也可以选择以下方式来给我们提供意见和建议</p>
              <p>
                {contact.map((icon) =>
                  // <span className={`icon font_family icon-${icon}`} key={icon} />
                  icon.name === 'wechat' ? (
                    <Tooltip
                      classes={{ tooltip: classes.lightTooltip }}
                      title={
                        <Fragment>
                          <img src={icon.QRcode} alt={icon.name} width="130" />
                          <p>微信扫一扫关注我</p>
                        </Fragment>
                      }
                      key={icon.name}
                    >
                      <a href={icon.link}  className="icon">
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
          </FeedBackContext>
      </div>
    );
  }
}


export default withStyles(styles as any)(FeedBackTable);