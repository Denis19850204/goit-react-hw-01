import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friendlist/Friendlist';
import TransactionHistory from './Transactions/Transactions';
import user from '../components/user.json';
import data from '../components/data.json';
import friends from '../components/friends.json';
import transactions from '../components/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div style={{ marginBottom: '80px' }}>
        <Statistics title="Upload stats" stats={data} />
      </div>

      <div>
        <FriendsList friends={friends} />
      </div>

      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
