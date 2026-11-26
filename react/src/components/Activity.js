import { useEffect, useState } from 'react';

function Activity(props) {
  const [activity, setActivity] = useState(null);
  const [refreshCount, setRefresCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (props.type) {
      async function loadActivity() {
        setIsLoading(true);

        const response = await fetch(`https://www.boredapi.com/api/activity?type=${props.type}`);
        const data = await response.json();
        setActivity(data);
      }
      loadActivity();
    }
  }, [props.type, refreshCount]);

  useEffect(() => {
    if (activity) {
      setIsLoading(false);
    }
  }, [activity]);

  return (
    <>
      <p>{activity ? activity.activity : 'No activity available'}</p>
      {props.type && (
        <button onClick={() => setRefresCount(refreshCount + 1)}>Get another activity</button>
      )}
      {isLoading && <p>loading...</p>}
    </>
  );
}

export default Activity;
