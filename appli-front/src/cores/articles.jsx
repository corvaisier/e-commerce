import React, { useState } from 'react'
import axios from 'axios'

function Articles() {

    const [title, changeTitle] = useState({ title: ""})
    const [image, changeImg] = useState({ image: ""})
    const [description, changeDescription] = useState({ description: ""})
    const [price, changePrice] = useState({ price: ""})

    // const [form, setForm] = useState({
    //     title: '',
    //     image: '',
    //     description: '',
    //     price: '',
    // }) 

    // setForm({...form, price: newPrice });

    function handleSubmit(event) {

        if (title.title === '' || image.image === '' || description.description === '' || price.price === '') {
            alert('veuillez remplir tous les champs')
        } else {
            axios.post(`http://julien-ecommerce.com:4200/api/articles/article`, {
                title: title,
                img: image,
                description: description,
                price: price,
            }).then(() => {
                alert('le commentaire a bien été soumis ')
            }).catch(() => {
                alert('une erreur est survenue ')
            })
        }
        event.preventDefault()
    }

    function insertTitle(event) {
        changeTitle( event.target.value);
    }
    function insertImage(event) {
        changeImg(event.target.value);
    }
    function insertDescription(event) {
        changeDescription(event.target.value);
    }
    function insertPrice(event) {
        changePrice(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title :
          <input type="text"  onChange={insertTitle} /></label>
            <label>
                Image :
          <input type="text"  onChange={insertImage} /></label>
          <label>
                Description :
          <input type="text"  onChange={insertDescription} /></label>
          <label>
                Price :
          <input type="text"  onChange={insertPrice} /></label>
            <input type="submit" value="Envoyer"/>
        </form>
    )
}
export default Articles