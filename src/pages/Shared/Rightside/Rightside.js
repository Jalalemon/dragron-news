import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Carousel from "react-bootstrap/Carousel";
import { FaGoogle,FaFacebook, FaTwitter, FaTwitch,FaWhatsapp, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
const  Rightside = () => {
    const { providerLogin } = useContext(AuthContext);

    const gogleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        providerLogin(gogleProvider)
        .then(result => {
            const user =result.user
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
      <div>
        <ButtonGroup vertical>
          <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
            <FaGoogle></FaGoogle> login with google
          </Button>
          <Button variant="outline-dark">
            <FaGithub></FaGithub> login with github
          </Button>
        </ButtonGroup>
        <div className='mt-5'>
          <h5>find us on</h5>
          <ListGroup>
            <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
            <ListGroup.Item className='mb-2'> Vestibulum</ListGroup.Item>
          </ListGroup>
        </div>
        <div>
            <BrandCarousel></BrandCarousel>
        </div>
      </div>
    );
};

export default  Rightside;