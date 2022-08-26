import Seo from '../../components/Seo';

export default function Detail({ params }: any) {
  const [title, id] = params || [];

  return (
    <div className="container">
      <Seo title={title} />
      <div>
        <p>{title || 'LOADING'}</p>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
      `}</style>
    </div>
  );
}

export function getServerSideProps({ params }: any) {
  return {
    props: params,
  };
}
