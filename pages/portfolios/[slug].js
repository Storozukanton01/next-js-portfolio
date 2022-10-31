import { useRouter } from 'next/router';

const PortfoliosDetail = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <h1>Detail page with slug: {slug}</h1>
  )
}

export default PortfoliosDetail;
