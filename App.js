import React from 'react';
import Friend from './Friend';
import './index.css';

function App() {
  const [friends, setFriends] = React.useState([]);

  function removeFriends() {
    setFriends([]);
  }


  const newFriendName = (<input placeholder="Friend's Name" name='newFriendName' type='text' className='newFriendName'/>)
  const newFriendAge = (<input type='date' placeholder="Friend's Age" name='newFriendAge' className='newFriendAge'/>)

  function addNewFriend(){
    setFriends(prevFriends => {
      return [...prevFriends, {
        img: './images/userProfile2.jfif',
        name: newFriendName,
        age: newFriendAge,
      }]
    })
  }


  return (
    <main className="border">
      <h1 className='title'>{friends.length} {friends.length === 1 ? 'Birthday' : 'Birthdays'} Today</h1>
      {friends.map((friend, index) => (
        <Friend
          key={index}
          img={friend.img}
          name={friend.name}
          age={friend.age}
        />
      ))}
      <button className='removeBtn' onClick={removeFriends}>Remove Birthdays</button>
      <button className='removeBtn' onClick={addNewFriend}>Add Birthday</button>

    </main>
  );
}

export default App;
