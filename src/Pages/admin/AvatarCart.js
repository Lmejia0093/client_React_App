import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import imagenAvatar from '../../assets/img/avatar.png'


export const AvatarCart = () => {
  return (
    <Card style={{ width: '25rem' }}>
    <Card.Img variant="top" src={imagenAvatar} />
    <Card.Body>
      <Card.Title>Usuario X</Card.Title>
      
      <Card.Text>
       Permisos
      
        <ul>
        <li>Permiso para editar categoria</li>
        <li>Permiso para editar Usuarios</li>
        <li>Permiso para editar Precios</li>
        <li>Permiso para Crear usuarios</li>
       </ul>
       
     
      </Card.Text>
     
   
     
            
    </Card.Body>
  </Card>
  )
}
