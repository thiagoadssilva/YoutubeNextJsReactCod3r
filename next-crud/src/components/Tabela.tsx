import Cliente from '../core/Cliente'
import { IconeEdicao, IconeLixo } from './Icones'

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){
    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function rederizarCabecalho(){
        return(
            <tr>
                <th className='text-left p-4'>Id</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {exibirAcoes ? <th className='p-4'>Ações</th>: false}
            </tr>
        )
    }

    function renderizarDados(){
        console.log(props.clientes)
        return props.clientes?.map((cliente, i) =>{
            return(
                <tr key={cliente.id} className={`
                    ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
                `}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4' >{cliente.idade}</td>
                    {exibirAcoes ? resderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function resderizarAcoes(cliente: Cliente){
        return(
            <td className='flex'>
                {props.clienteSelecionado ? (
                    <button className='
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 m-1
                    hover:bg-purple-50
                '>
                        {IconeEdicao}
                    </button>   
                ): false}

                {props.clienteExcluido ? (
                    <button className='
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    '>
                        {IconeLixo}
                     </button> 
                ): false}   
                
                
            </td>
        )
    }
    
    return(
        <table className='w-full rounded-xl overflow-hidden '>
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            `}>
            {rederizarCabecalho()}
            </thead>
            <tbody>
            {renderizarDados()}
            </tbody>
        </table>
    )
}