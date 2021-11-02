import React, { Component } from 'react';

import './CataLog.less';


interface TableOfContentItem {
  url: string;
  title: string;
  items?: TableOfContentItem[];
}
interface Props {
  catalogData: TableOfContentItem[]
}

class CataLog extends Component<Props, {}> {

  catalog: React.RefObject<HTMLDivElement>
  componentDidMount() {
    this.getNodeList();
    window.addEventListener('scroll', this.handleScroll);
    // window.addEventListener('resize', this.handleCatalogHeight);
    // document.addEventListener('DOMContentLoaded', this.handleCatalogHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleCatalogHeight = () => {
      if (!this.catalog.current) {
          return;
      }
    if (window.innerHeight < 750) {
      this.catalog.current.style.height = `${window.innerHeight - 164}px`;
    } else {
      this.catalog.current.style.height = '100vh';
    }
  };
  // 获得文章详情中各锚点的Node
  aNodeList = [];
  aNodeMap: Record<string, HTMLElement> = {};
  getNodeList = () => {
    const h1List = document.getElementsByTagName('h1');
    const h2List = document.getElementsByTagName('h2');
    const h3List = document.getElementsByTagName('h3');
    const titleList = [h1List, h2List, h3List].filter(item => Boolean(item)).reduce((pre, current) =>  {
      pre = pre.concat(...current);
      return pre;
    }, []);

    titleList.forEach(item => this.aNodeMap[item.innerText] = item);

    const each = (arr: TableOfContentItem[]) => {
      Array.isArray(arr) &&
        arr.forEach((item) => {
          item.items && each(item.items);

          // isInvalid 时，不需采集该 item 的 node
          if (this.aNodeMap[item.title]) {
            const node = this.aNodeMap[item.title];
            node && this.aNodeList.push(node);
          }
        });
    };
    each(this.props.catalogData);
    console.log(this.aNodeList)
  };

  // scroll event
  activedNode = null;
  isWaitingForNextFrame = false;
  handleScroll = () => {
    if (!this.catalog.current) {
      return;
  }
    if (this.isWaitingForNextFrame) return null;
    this.isWaitingForNextFrame = true;
    if (document.documentElement.scrollTop > 100) {
      this.catalog.current.style.top = '0px';
    } else {
      this.catalog.current.style.top = '100px';
    }
    this.handleCatalogHeight();
    window.requestAnimationFrame(this.onScroll);
  };
  onScroll = () => {
    this.isWaitingForNextFrame = false;

    this.aNodeList.forEach((node) => {
      if (!node) return null;
      const nodeMSG = node.getBoundingClientRect();

      if (nodeMSG.top < 150 && nodeMSG.top > -150) {
        if (this.activedNode !== node) {
          this.activedNode = node;

          // 清空之前的 active node
          document.querySelectorAll('.catalog-item-active').forEach((item) => item.classList.remove('catalog-item-active'));

          // 激活新的 active node
          const willBeActiveNode = document.getElementsByClassName(`${this.activedNode.id}-catalog`)[0];
          if (willBeActiveNode) {
            willBeActiveNode.classList.add('catalog-item-active');
          }
        }
      }
    });
  };

  handleClick = (e) => {
    const targetContent = document.querySelector(`#${e.target.dataset.id}`);
    if (!targetContent) return null;
    targetContent.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  render() {
    return (
      <div className="catalog-wrapper">
        <div id="catalog" ref={this.catalog}>
          <h2>目录</h2>
          <ul>{this.props.catalogData.map(this.renderLi)}</ul>
        </div>
      </div>
    );
  }

  renderLi = (item, i) => {
    if (item.isInvalid) {
      return (
        <li key={item.id}>
          <span style={{ cursor: 'no-drop', textDecoration: 'line-through' }}>{item.text}</span>
        </li>
      );
    }
    return (
      <li key={item.title}>
        {item.items ? (
          [
            <span key={item.title} data-id={item.id} onClick={this.handleClick} className={[i === 0 ? 'catalog-item-active' : '', `${item.id}-catalog`].join(' ')}>
              {item.title}
            </span>,
            <ul key={item.items.toString()}>
              {item.items.map((subItem) => (
                <li key={subItem.id}>
                  {subItem.isInvalid ? (
                    <span style={{ cursor: 'no-drop', textDecoration: 'line-through' }}>{subItem.text}</span>
                  ) : (
                    <span data-id={subItem.id} onClick={this.handleClick} className={`${subItem.id}-catalog`}>
                      {subItem.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ]
        ) : (
          <span data-id={item.title} onClick={this.handleClick} className={[i === 0 ? 'catalog-item-active' : '', `${item.id}-catalog`].join(' ')}>
            {item.text}
          </span>
        )}
      </li>
    );
  };
}

export default CataLog;
