import Image from 'next/image';
import Index from '@/components/Index';
import Navbar from '@/components/NavBar/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Index />
    </>
  );
}
