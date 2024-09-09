import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redireciona para a página de login
  }, [router]);

  return null; // Não renderiza nada enquanto redireciona
};

export default Home;
