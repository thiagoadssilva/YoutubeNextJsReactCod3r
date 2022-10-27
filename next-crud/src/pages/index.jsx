import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

const clientes = [
  new Cliente('Thiago', 36, '1'),
  new Cliente('Dineia', 39, '2'),
  new Cliente('Bento', 5, '3'),
]

function clienteSelecionado(cliente: Cliente){
  return '123'
}

export default function Home() {
  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
        clienteSelecionado={clienteSelecionado}></Tabela>
      </Layout> 
    </div>
  )
}
