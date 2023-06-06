import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function PageOne() {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    console.log('searchParams-name:', searchParams.get('name'));
    console.log('searchParams-name:', searchParams);
  }, [searchParams]);

  return (
    <div>
      <div className="content-title">searchParams</div>
      <div>name:{searchParams.get('name')}</div>
    </div>
  );
}
