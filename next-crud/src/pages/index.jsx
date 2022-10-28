import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'

const clientes = [
  new Cliente('Thiago', 36, '1'),
  new Cliente('Dineia', 39, '2'),
  new Cliente('Bento', 5, '3'),
]

function clienteSelecionado(clientes){
  console.log(clientes.nome)
}

function clienteExcluido(clientes){
  console.log("excluido" + clientes.nome)
}

export default function Home() {
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
        <div className='flex justify-end'>
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        
        <Tabela 
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout> 
    </div>
  )
}
