import logo from '../assets/logo.png';
import github from '../assets/github.svg';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <div className='width-full flex justify-center mt-2'>
      <div className='w-[80%] flex justify-between items-center bg-gray-900 px-3 py-2.5 rounded-full'>
        <Link to="/">
          <img src={logo} alt="logo da aplicaçõo" />
        </Link>
        <nav className='h-full '>
          <ul className="flex space-x-4 h-full items-center">
            <li className='h-full flex items-center'><Link to="/produtos" className='px-3 text-gray-500 hover:text-gray-300'>Produto</Link></li>
            <li className='h-full flex items-center'><Link to="/categorias" className='px-3 text-gray-500 hover:text-gray-300'>Categoria</Link></li>
          </ul>
        </nav>
        <Link to="#" className='flex items-center gap-3 bg-white px-3 py-2 rounded-full text-gray-900 hover:bg-gray-400 transition-colors'>
          <p className='text-xs'>Link do projeto</p>
          <img src={github} width={24} />
        </Link>
      </div>
    </div>
  )
}
