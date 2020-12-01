import Profile from './components/Profile/Profile';
import user from './user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json'

function App() {
  return (
    <div>

      <div>
        <h1>Profile</h1>
      <Profile
      imageUrl={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
        /> 
      </div>
      
      <div>
        <h1>Statistics</h1>
      <Statistics stats = {statisticalData}/>
      </div>

      <div>
        <h1>FriendList</h1>
        <FriendList friends={friends }/>
      </div>

      <div>
        <h1>Transaction History</h1>
        <TransactionHistory items={transactions }/>
      </div>
        
      
      </div>
    );
}

export default App;
