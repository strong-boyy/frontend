import RegisterHeader from '../../components/RegisterHeader'

interface Props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div className='bg-gradient-to-r from-slate-50 to-teal-100 min-h-screen'>
      <RegisterHeader />
      {children}
    </div>
  )
}
