import React from 'react'
import PageDefualt from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo() {
    return(
      <PageDefualt>
        <h1>Página de cadastro Vídeo</h1>


        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefualt>
    )
  }

  export default CadastroVideo