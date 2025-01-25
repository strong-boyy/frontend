import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-1'>
        <SideBar />
      </div>
      <div className='col-span-11'>
        <div className='flex-1 px-8 py-4'>
          <Header />
        </div>
        {children}
      </div>
    </div>
  )
}
