import Logo from '@src/app/components/Logo'

const Header = () => {
  return (
    <header className='flex flex-row justify-between py-3 max-w-[1300px] m-auto'>
      <Logo />
      <h1 className='flex items-center'>Esto es el header</h1>
    </header>
  )
}
export default Header
