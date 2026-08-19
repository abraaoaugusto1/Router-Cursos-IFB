import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

type Curso = {
  titulo: string
  descricao: string
}

export default function Detalhes() {
  const { id } = useParams()
  const [curso, setCurso] = useState<Curso>();

  //Buscar os dados do outro sistema
  useEffect(() => {
    const buscarCursos = async () => {
      try{
       const { data } = await axios.get<Curso>(`https://escola-api-dhkn.onrender.com/cursos/${id}`);
       setCurso(data);
      } catch (error) {
        alert("Erro ao buscar os cursos: " + error)
      }
    }
    buscarCursos()
  }, [id])


  return (
    <div>
      <h2>{curso?.titulo}</h2>
      <p>{curso?.descricao}</p>
      <p>
        <Link to="/cursos">Voltar para cursos</Link>
      </p>
    </div>
  )
}