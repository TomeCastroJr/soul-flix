import { Badge, Button, Card, Container, Row } from "react-bootstrap"

function CardFilme({ titulo, descricao, assistido, genero, id, deletarFilmes }){
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
        <Card  key={filme.id}>
            <Card.Img variant="top" src="https://placehold.co/200x200" style={{ width: '200px' }}/>
            <Card.Body>
                <Card.Title>{filme.titulo}</Card.Title>
                <Card.Text>
                    {filme.descricao}
                </Card.Text>
                <div>
                    {filme.assistido ? 
                        <Badge bg="success">Concluído</Badge>:
                        <Badge bg="warning">Pendente</Badge>
                    }
                    <Badge bg="dark">{filme.genero}</Badge>
                </div>
                <Button 
                    variant="dark" 
                    onClick={ () => navigate(`/filmes/editar/${filme.id}`)} >Editar
                </Button>
                <Button variant="danger" onClick={ () => deletarFilmes(filme.id)}>Excluir</Button>
            </Card.Body>
        </Card>
    </Col>    
  )
}

export default CardFilme