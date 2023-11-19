import { useAuth0 } from "@auth0/auth0-react"
import { Card } from "react-bootstrap"

const Profile = ()=> {
    const {user} = useAuth0()
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.picture} alt={user.name} />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>{user.phone_number}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Profile