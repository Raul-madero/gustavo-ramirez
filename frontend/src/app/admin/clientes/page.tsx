'use client'
import ClienteNombre from "@/app/components/admin/ClienteNombre"
import TablaClientes from "@/app/components/admin/TablaClientes"
import useIsLoggedIn from "@/hooks/useIsLoggedIn"
import Link from "next/link"

const Clientes = () => {  
    const {email, isLoggedIn, user} = useIsLoggedIn()

  return (
    <div>
      <ClienteNombre />
      <TablaClientes />
      {email === "r.madero.ramirez@gmail.com" ? <Link href='/admin' className='mx-auto mb-10 text-white font-bold text-center flex justify-center items-center bg-emerald-400 w-48 h-16 rounded-xl shadow-xl'>Volver</Link> : null}
    </div>
  )
}

export default Clientes
