import React from 'react'
import { Card, Badge } from 'react-bootstrap';

function ImageCard({image}) {
    const tags = image.tags.split(',');

    return (
            <Card className="mb-4 mx-auto" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image.webformatURL} />
            <Card.Body>
                <Card.Title>photo by {image.user}</Card.Title>
                <Card.Text>
                <ul>
                <li >
                    <strong>Views: </strong>
                    {image.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {image.likes}
                </li>
                </ul>
                </Card.Text>
            </Card.Body>
            <div className="mx-auto mb-2">
                {tags.map((tag,index) => ( <Badge className="mr-2 " variant="light" key={index} >#{tag}</Badge>))}
            </div>
            </Card>
    )
}

export default ImageCard
