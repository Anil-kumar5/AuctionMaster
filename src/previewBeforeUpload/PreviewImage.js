import React from 'react'

function PreviewImage() {
    const [ image , setImage ]  =React.useState('./card1.png');
    const [ images , setImages ] = React.useState([]);
    const imageHandler = e =>{
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    const onClickHandler = e =>{
        setImages([...images,image])
    }
    return (
        <div>
            <img src = {image} />
            <input 
             type = 'file'
             onChange = {imageHandler}
             />
             <button onClick = {onClickHandler}>add</button>
             {
                 images.map(im => <img src={im}/>)
             }
        </div>
    )
}

export default PreviewImage
