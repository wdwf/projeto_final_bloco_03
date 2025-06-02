import logo from '../assets/logo.png';
import github from '../assets/github.svg';

export default function Nav() {
  return (
    <div className='width-full flex justify-center mt-2'>
      <div className='w-[80%] flex justify-between items-center bg-gray-900 px-3 py-2.5 rounded-full'>
        <a href="/">
          <img src={logo} alt="logo da aplicaçõo" />
        </a>
        <nav className='h-full '>
          <ul className="flex space-x-4 h-full items-center">
            <li className='h-full flex items-center'><a href="/produtos" className='px-3 text-gray-500 hover:text-gray-300'>Produto</a></li>
            <li className='h-full flex items-center'><a href="/categorias" className='px-3 text-gray-500 hover:text-gray-300'>Categoria</a></li>
          </ul>
        </nav>
        <a href="#" className='flex items-center gap-3 bg-white px-3 py-2 rounded-full text-gray-900 hover:bg-gray-400 transition-colors'>
          <p className='text-xs'>Link do projeto</p>
          <img src={github} width={24} />
        </a>
      </div>
    </div>
  )
}
