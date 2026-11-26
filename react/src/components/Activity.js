import { useEffect, useState } from 'react';

function Activity(props) {
  const [activity, setActivity] = useState(null);
  useEffect(() => {
    if (props.type) {
      async function loadActivity() {
        const response = await fetch(`https://www.boredapi.com/api/activity?type=${props.type}`);
        const data = await response.json();
        setActivity(data);
      }
      loadActivity();
    }
  }, [props.type]);

  return <p>{activity ? activity.activity : 'No activity available'}</p>;
}

export default Activity;
