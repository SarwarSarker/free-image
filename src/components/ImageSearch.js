import React, {useState} from 'react';
import { Form,Button } from 'react-bootstrap';

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        searchText(text);
    }
    return (
        <>      
      <div className="banner">
            <h5 class="mb-2"> Explore millions of Beautiful free images</h5>
            <p class="mb-5">Find the perfect image or graphic for your next project </p>
     
            <Form onSubmit={handleSubmit} inline >
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                    Name
                </Form.Label>
                <Form.Control
                    className="mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    type="text"
                     placeholder="Search Image..."
                    onChange={handleChange}
                />
                 <Button type="submit" className="mb-2">
                 Search
                </Button>
            </Form>
            </div>
        </>
    )
}

export default ImageSearch;