import { useParams, Link } from 'react-router-dom'

const cursos: Record<number, { titulo: string; descricao: string}> = {
  1: {
    titulo: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    descricao:
      'Perfil: Formação para atuar no desenvolvimento de software, análise de sistemas e soluções tecnológicas. Duração: 3 anos. Carga horária aproximada: 2000 horas.',
  },
  2: {
    titulo: 'Tecnologia em Secretariado',
    descricao:
      'Perfil: Formação para atuação em atividades administrativas, suporte executivo e gestão de serviços.',
  },
  3: {
    titulo: 'Licenciatura em Letras – Língua Portuguesa',
    descricao:
      'Perfil: Formação de professores para atuação no ensino de Língua Portuguesa, com foco em literatura, linguística e práticas de ensino.',
  },
  4: {
    titulo: 'Licenciatura em Pedagogia',
    descricao: 'Perfil: Formação para atuação no ensino e gestão educacional.',
  },
}

export default function Detalhes() {
  const { id } = useParams()
  const curso = id ? cursos[Number(id)] : undefined

  if (!curso) {
    return (
      <div>
        <h2>Curso não encontrado</h2>
        <p>O curso solicitado não existe.</p>
        <p>
          Voltar para <Link to="/cursos">lista de cursos</Link>.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2>{curso.titulo}</h2>
      <p>{curso.descricao}</p>
      <p>
        <Link to="/cursos">Voltar para cursos</Link>
      </p>
    </div>
  )
}