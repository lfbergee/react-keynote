export const usestate = `const [name, setName] = useState("Foo Bar")`;

export const usecontext = `const value = useContext(SomeContext)`;

export const useeffect = `useEffect(() => {
    window.setTitle(SomeValue);
    return () => window.setTitle("DefaultValue");
}, [SomeValue])`;

export const customhook = `import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}`;
