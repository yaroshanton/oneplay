import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import Navigation from '../menu-navigation';
import UserMenu from '../user-menu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </header>
  );
}
