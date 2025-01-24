import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-2'>
        <SideBar />
      </div>
      <div className='col-span-10'>
        <div className='flex-1 p-8'>
          <Header />
        </div>
        {children}
      </div>
    </div>
  )
}
