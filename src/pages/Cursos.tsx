import { Link } from 'react-router-dom'

export default function Cursos() {

  return (
    <div className="cursos-page">
      <h2>Lista de Cursos de Graduação</h2>
      <ul className="cursos-list">
          <li>
            <Link to={`/detalhes/1`}>Tecnologia em Análise e Desenvolvimento de Sistemas</Link>
          </li>
          <li>
            <Link to={`/detalhes/2`}>Tecnologia em Secretariado</Link>
          </li>
          <li>
            <Link to={`/detalhes/3`}>Licenciatura em Letras – Língua Portuguesa</Link>
          </li>
          <li>
            <Link to={`/detalhes/4`}>Licenciatura em Pedagogia</Link>
          </li>
      </ul>
    </div>
  )
}







/*
import { Link } from 'react-router-dom'

export default function Cursos() {
  const cursos = [
    { id: 1, nome: 'Tecnologia em Análise e Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Tecnologia em Secretariado' },
    { id: 3, nome: 'Licenciatura em Letras – Língua Portuguesa' },
  ]

  return (
    <div>
      <h2>Lista de Cursos de Graduação</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link to={`/detalhes-curso-${curso.id}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

*/