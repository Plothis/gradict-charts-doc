import React, { useState } from 'react';
// import { navigate } from "@reach/router"
import { navigate } from "gatsby"
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import { useWidth } from '../hooks/withWidth';
// import DailogMask from './DailogMask';
// import { scrollToTop } from '../utils/scroll';

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

// TODO 路由为什么都带有 /
const data = {
  list: [
    {
      name: '使用说明',
      fun: () => {
        navigate('/introduce/');
        // scrollToTop();
      }
    },
    {
      name: '关于我们',
      fun: () => {
        navigate('/about/');
        // scrollToTop();
      }
    },
    // {
    //   name: '合作伙伴',
    //   fun: null
    // },
    {
      name: '服务协议',
      fun: () => {
        navigate('/service/')
        // scrollToTop();
      }
    }
  ],
  icons: [
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
      link: '',
      QRcode: '../static/QR-code/Plothis.jpeg'
    }
  ],
  copyright: '图之典.2019 沪ICP备 18040493号-3'
};

const Footer: React.FC<{}> = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const toggleFeedback = () => { setOpen(!open); };
  const width = useWidth();
  return (
    <div>
      <div className="footer-container">
        <div className="foot-list">
          {width === 'xs' ? (
            <>
              <ul>
                {data.list.map((item) => (
                  <li key={item.name} className="list" onClick={item.fun}>
                    {item.name}
                  </li>
                ))}
              </ul>
              <ul style={{ marginTop: '18px' }}>
                <li className="icon-list">
                  {data.icons.map((icon) => (
                    <a href={icon.link} target="view_window" key={icon.name}>
                      <span className={`font_family icon-${icon.name}`} />
                    </a>
                  ))}
                </li>
              </ul>
            </>
          ) : (
              <ul>
                {data.list.map((item) => (
                  <li key={item.name} className="list" onClick={item.fun}>
                    {item.name}
                  </li>
                ))}
                <li className="icon-list">
                  {data.icons.map((icon) =>
                    icon.name === 'wechat' ? (
                      <Tooltip
                        classes={{ tooltip: classes.lightTooltip }}
                        // placement="top"
                        title={
                          <>
                            <img src={icon.QRcode} alt={icon.name} height="130" />
                            <p>微信扫一扫关注我</p>
                          </>
                        }
                        key={icon.name}
                      >
                        <a href="#!" target="view_window">
                          <span className={`font_family icon-${icon.name}`} />
                        </a>
                      </Tooltip>
                    ) : (
                        <a href={icon.link} target="view_window" key={icon.name}>
                          <span className={`font_family icon-${icon.name}`} />
                        </a>
                      )
                  )}
                </li>
              </ul>
            )}
        </div>
        <p className="copyright">&copy;&emsp;{data.copyright}</p>
      </div>
      {/* <DailogMask open={open} toggleFeedback={toggleFeedback} /> */}
    </div>
  );
}

export default Footer;
