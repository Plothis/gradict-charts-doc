import React, { Component, Fragment } from 'react';

import Close from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import uploadStyles from 'antd/lib/upload/style/index.css';
import modelStyles from 'antd/lib/modal/style/index.css';
import iconStyles from 'antd/lib/icon/style/index.css';
import styled from 'styled-components';
import { pick, get } from 'lodash';
import { uploadURL } from '../constants/api';
import { feedback, FeedbackParams } from '../api/common';
import '../style/upload.less';

interface Props {
  classes: Record<string, any>;
  graphId?: string;
  toggleFeedback: () => void;
}
interface State{
  description: string;
  email: string;
  nickname: string;

  previewVisible: boolean;
  previewImage: string;
  fileList: any[];

  status: string;
  maxHeight: number;
  windowHeight?: number;
  type: string;
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
    name: 'yuque',
    link: 'https://www.yuque.com/gradict/intro/zv7367'
  },
  // {
  //   name: 'github',
  //   link: 'https://github.com/Plothis/gradict-doc'
  // },
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
class FeedBackTable extends Component<Props, State> {
  initialState: State = {
    description: '',
    email: '',
    nickname: '',

    previewVisible: false,
    previewImage: '',
    fileList: [],

    status: 'edit',
    maxHeight: 0,
    type: '错误反馈'
  };
  state = this.initialState;

  handleChange = (name: keyof State) => (event) => {
    this.setState({
      [name]: event.target.value
    } as State);
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleImgChange = ({ fileList }) => {
    const data = fileList.map((file) => {
      return {
        uid: get(file, 'uid'),
        name: get(file, 'name'),
        status: get(file, status),
        url: get(file, ['response', 'data', 'file'])
      };
    });
    this.setState({ fileList: data });
  };
  varify = () => {
    const data = pick(this.state, ['description', 'email', 'nickname']);
    const isEmpty = (filed) => !data[filed];
    if (isEmpty('email') || isEmpty('email') || isEmpty('description')) {
      return false;
    }
    return true;
  };
  handleSubmit = () => {
    const data: FeedbackParams = pick(this.state, ['description', 'email', 'nickname', 'type']);
    if (!this.varify()) {
      // alert('昵称,邮箱,内容必填');
      return;
    } else {
      data.images = this.state.fileList.map((img) => ({ filename: img.name, path: img.url }));
      const id = this.props.graphId;
      if (id) data.graphId = id;
      feedback(data).then(() => {
        this.setState({ status: 'success' });
      }).catch(() => {
        this.setState({ status: 'fail' });
      });

    }
  };
  handleConfirmSuccess = () => {
    this.props.toggleFeedback();
    this.setState({ status: 'edit', description: '', email: '', nickname: '', type: '错误反馈', fileList: [] });
  };
  componentDidMount() {
    this.setState({ windowHeight: window && window.innerHeight });
  }

  render() {
    const { toggleFeedback, classes } = this.props;
    const { description, email, nickname, previewVisible, previewImage, fileList, status, type } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: uploadStyles }} />
        <style dangerouslySetInnerHTML={{ __html: iconStyles }} />
        <style dangerouslySetInnerHTML={{ __html: modelStyles }} />
        {status === 'edit' ? (
          <FeedBackContext>
            <div style={{ padding: '0 24px' }}>
              <span className="close" onClick={toggleFeedback}>
                <Close />
              </span>
              <h3>内容反馈</h3>
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
            <div className="input-area" style={{ maxHeight: this.state.windowHeight - 400 + 'px' }}>
              <div className="input-box">
                {['错误反馈', '创意想法', '提出疑问', '商务合作'].map((item) => (
                  <span key={item} className={`type ${type === item ? 'active' : ''}`} onClick={() => this.setState({ type: item })}>
                    {item}
                  </span>
                ))}
                <br />
                <textarea name="description" id="fb-description" value={description} onChange={this.handleChange('description')} placeholder="请选择一个反馈类型，并输入您要反馈的内容" />
              </div>
              <div className="input-box">
                <label htmlFor="fb-images">相关图片</label>
                <span className="desc">支持jpg/gif/png格式，每张图片不超过10M，不超过100张</span>
                <br />
                <Upload action={uploadURL} listType="picture-card" fileList={fileList} onPreview={this.handlePreview} onChange={this.handleImgChange}>
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </div>
              <div className="input-box">
                <label htmlFor="fb-nickname">
                  昵称<span style={{ color: '#d33a2a' }}>*</span>
                </label>
                <span className="desc">您的意见一经采用，您的昵称将会显示在贡献者名单上</span>
                <br />
                <input type="text" name="nickname" id="fb-nickname" value={nickname} onChange={this.handleChange('nickname')} />
              </div>
              <div className="input-box">
                <label htmlFor="fb-email">
                  邮箱地址<span style={{ color: '#d33a2a' }}>*</span>
                </label>
                <span className="desc">方便我们及时与您取得联系</span>
                <br />
                <input type="text" name="email" id="fb-email" value={email} onChange={this.handleChange('email')} />
              </div>
            </div>

            <div className="input-box" style={{ padding: '0 24px' }}>
              <button onClick={this.handleSubmit} style={this.varify() ? { background: '#343e73' } : { background: '#d0d0d0' }}>
                提交
              </button>
            </div>
          </FeedBackContext>
        ) : status === 'success' ? (
          <Result style={{ height: this.state.windowHeight > 700 ? '600px' : this.state.windowHeight - 100 + 'px' }}>
            <div>
              <img src={successMsg.img} alt="" />
              <p>{successMsg.tips}</p>
              <button onClick={this.handleConfirmSuccess}>{successMsg.button}</button>
            </div>
          </Result>
        ) : (
          <Result style={{ height: this.state.windowHeight > 700 ? '600px' : this.state.windowHeight - 100 + 'px' }}>
            <div>
              <img src={failMsg.img} alt="" />
              <p>{failMsg.tips}</p>
              <button onClick={() => this.setState({ status: 'edit' })}>{failMsg.button}</button>
            </div>
          </Result>
        )}
      </div>
    );
  }
}


export default withStyles(styles as any)(FeedBackTable);