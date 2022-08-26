import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  return (
    <div>
      {/* 직접 주소를 치고 들어가면 query.title에 대한 정보가 없으므로 LOADING이 뜸 */}
      <p>{router.query.title || 'LOADING'}</p>
    </div>
  );
}
