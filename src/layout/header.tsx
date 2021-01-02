import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import Menu from '@material-ui/icons/Menu';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as indexActions from '../store/actions/indexActions';

const links = [{ url: '/', name: '首页' }, { url: '/introduce/', name: '本站介绍' }, { url: '/about/', name: '关于我们' }];

const Header: React.FC<WithWidth> = ({ width }) => {
  const { pathname } = useLocation();
  const [drawer, setDrawer] = useState<boolean>(false);
  const toggleDrawer = (status: boolean) => {
    setDrawer(status);
  }
  // 首页意外隐藏filters按钮
  const hideFilters = pathname !== '/';
  return (
    <div className="header-container">
      {width === 'xs' ? (
        <>
          <div className="home-button">
            <Menu onClick={() => toggleDrawer(true)} />
          </div>
          <Link to="/">
            <img className="logo" src="/logo.png" alt="" />
          </Link>
          <div className="filters-button"
            // onClick={this.props.toggleMobileFilters} 
            style={hideFilters ? { visibility: 'hidden' } : {}}>
            筛选
              <ArrowDropDown />
          </div>
        </>
      ) : (
          <>
            <Link to="/">
              <img className="logo" src="/logo.png" alt="" />
            </Link>
            <div className="links">
              {links.map((link, index) => (
                <Link to={link.url} key={index} className={pathname === link.url ? '' : 'is-current'}>
                  {link.name}
                </Link>
              ))}
            </div>
          </>
        )}
      <Drawer anchor="top" open={drawer} onClose={() => { toggleDrawer(false) }}>
        <div>
          <List component="nav">
            {links.map((link, index) => (
              <Link to={link.url} key={index}>
                <ListItem button>
                  <span
                    className={pathname === link.url ? 'is-current' : ''}
                    style={{ color: '#343e73', opacity: pathname === link.url ? '' : '0.7' }}
                  >
                    {link.name}
                  </span>
                  <ListItemSecondaryAction>
                    <ChevronRight style={{ color: '#343e73' }} />
                  </ListItemSecondaryAction>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

// // 将actions映射到组件的props中
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ ...indexActions }, dispatch);
// }

// export default withWidth()(
//   withRouter(
//     connect(
//       null,
//       mapDispatchToProps
//     )(Header)
//   )
// );

export default withWidth()(Header);