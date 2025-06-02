import logoGeneration from '../assets/logo-generation.png';

export default function Footer() {
  return (
    <footer className='w-full flex-col border-t border-gray-200 bg-white p-4 flex items-center justify-center '>
      <p className='font-bold text-gray-400'>Em parceria com</p>
      <img className='h-[60px]' src={logoGeneration} alt="logo da generation" />
    </footer>
  )
}
