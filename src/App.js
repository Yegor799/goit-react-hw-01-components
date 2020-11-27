import Profile from './components/Profile/Profile'
import user from './user.json'

function App() {
  return (
    <div>
    <Profile
      imageUrl={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
      // followers={user.stats.followers}
      // views={user.stats.views}
      // likes ={user.stats.likes}
/>
  
    </div>
    );
}

export default App;
