import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">消息列表页面</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
