import PropTypes from 'prop-types';
import Friend from './Friend'

const FriendList = ({ friends }) => (
    <ul>
        {friends.map(friend => (
            <Friend
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            
        ))}
    </ul>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
         id:PropTypes.number.isRequired})).isRequired

}


export default FriendList;