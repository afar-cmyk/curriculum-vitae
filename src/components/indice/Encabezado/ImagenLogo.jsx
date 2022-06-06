import React from 'react'
import { Box } from '@mui/material'
import ColoresContext from '../ColoresContext'
import LogoSVG from './LogoSVG'
import foto from '../../../images/foto.jpg'

const ImagenLogo = () => {
  const [estadoImagen, setEstadoImagen] = React.useState(true)

  const { temaActual, esquemaTema } = React.useContext(ColoresContext)

  const { fondo, logo, logoHover } = esquemaTema[temaActual]

  return (
    <Box
      className='contenedor-logo-foto'
      component='button'
      onClick={() => setEstadoImagen(!estadoImagen)}
      onKeyDown={() => setEstadoImagen(!estadoImagen)}
      sx={{
        backgroundImage: estadoImagen ? 'unset' : `url(${foto})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '50%',
        backgroundColor: fondo,
        padding: 'calc(20px + 0.5vw)'
      }}
    >
      <LogoSVG
        className='logo-svg'
        sx={{
          color: estadoImagen ? logo : 'transparent',
          fontSize: 'calc(110px + 4.5vw)',
          position: 'relative',
          bottom: '0.5vw',
          '&:hover': {
            color: estadoImagen ? logoHover : 'transparent'
          }
        }}
      />
      {/* {estadoImagen ? (
        <ComponenteLogo
          sx={{
            // display: 'none',
            color: estadoImagen ? logo : 'transparent',
            fontSize: 'calc(110px + 4.5vw)',
            position: 'relative',
            bottom: '0.5vw',
            '&:hover': {
              color: logoHover
            }
          }}
        />
      ) : (
        <img component='img' alt='foto de perfil' src={foto} />
      )} */}
    </Box>
  )
}

export default ImagenLogo
