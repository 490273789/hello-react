import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function PageOne() {
  const params = useParams();
  useEffect(() => {
    console.log('params:', params);
  }, [params]);

  return (
    <div>
      <div className="content-title">params</div>
      <div>{JSON.stringify(params)}</div>
    </div>
  );
}
