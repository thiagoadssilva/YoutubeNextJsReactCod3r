import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from 'react'
import { useEffect } from 'react'
import ColecaoCliente from '../backend/db/ColecaoCliente'


export default function Home() {
  const [tabela, setTabela] = useState(true)
  const [clientes, setClientes] = useState([Cliente.vazio])
  const ClienteRepositorio = new ColecaoCliente()

  useEffect(() => {
    ClienteRepositorio.obterTodos().then(setClientes)
  }, [])

  function clienteSelecionado(clientes){
    setCliente(clientes)
    setTabela(false)
  }
  
  function clienteExcluido(clientes){
    console.log("excluido" + clientes.nome)
  }

  function salvarCliente(clientes){
    console.log(clientes)
    setTabela(true)
  }

  function novoCliente(clientes){
    setCliente(Cliente.vazio)
    setTabela(false)
  }

  return ( 
    <div className={`
      flex 
      justify-center 
      items-center 
      h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500 
    text-white`
    }>
      <Layout titulo="Cadastro Simples">
        {tabela ? (
          <>
            <div className='flex justify-end'>
              <Botao 
                onClick={novoCliente()} 
                cor="green" 
                className="mb-4">
                  Novo Cliente
              </Botao>
            </div>
            
            <Tabela 
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>        
        ): (
          <Formulario 
            cliente={cliente} 
            cancelado={() => setTabela(true)}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout> 
    </div>
  )
}
