import React from 'react'
import '../styles/global.css'
import { Box } from '@mui/material'
import { ColoresProvider } from '../components/indice/ColoresContext'
import Encabezado from '../components/indice/Encabezado'
import Acerca from '../components/indice/Acerca'
import Estudios from '../components/indice/Estudios'
import HabilidadesTecnicas from '../components/indice/HabilidadesTecnicas'
import Experiencia from '../components/indice/Experiencia'
import SEO from '../components/SEO'

export default function index() {
  return (
    <>
      <SEO
        title='Curriculum'
        description='Este es mi curriculum vitae version PWA'
      />
      <Box component='main' sx={{ ...contenedorPrincipal }}>
        <ColoresProvider>
          <Encabezado />
          <article>
            <Acerca />
            <Estudios />
            <HabilidadesTecnicas />
            <Experiencia />
          </article>
        </ColoresProvider>
      </Box>
    </>
  )
}

let contenedorPrincipal = {
  backgroundColor: '#0d0d0d',
  py: { xs: '37.5px', md: '107.5px', lg: '75px' },
  px: { xs: '6vw', md: '215px', lg: '20vw', xl: '30vw' },
  minHeight: '100vh',
  boxSizing: 'border-box',
  blockSize: 'auto'
}