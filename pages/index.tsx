import { InferGetServerSidePropsType } from 'next';
import Seo from '../components/Seo';

interface IMovieProps {
  id: number;
  original_title: string;
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Home({ results }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: IMovieProps) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          cursor: pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`${process.env.BASE_URL}api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
