
import Col from 'react-bootstrap/Col';

const ProjectCard = ({title,description,img}) => {
    return ( 
        <Col sm={12} md={12} lg={4}>
        <div className="img-box">
           
            <img className='img img-fluid' src={img} alt="" />
            
        <div className="text">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        </div>
        </Col>
     );
}
 
export default ProjectCard;